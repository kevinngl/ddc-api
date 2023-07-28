const shortUUID = require('short-uuid');
const moment = require('moment');
const { sequelize } = require('../models');
const donationRepository = require('../repositories/donationRepository');
const paymentRepository = require('../repositories/paymentRepository');
const { createPaymentLink } = require('../utils/midtrans');

const getAllDonation = async (payload, paginate) => {
  try {
    const offset = paginate.limit * (paginate.page - 1);
    const opt = {
      limit: paginate.limit,
      offset,
      order: [
        ['updatedAt', 'DESC'],
        ['createdAt', 'DESC'],
      ],
    };
    const where = {};

    if (payload.donatorId) {
      where.donatorId = payload.donatorId;
    }

    if (payload.campaignId) {
      where.campaignId = payload.campaignId;
    }

    if (payload.paymentStatus) {
      where.paymentStatus = payload.paymentStatus;
    }

    const donations = await donationRepository.findAllDonation(where, opt);

    return donations;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getDonationDetail = async (id) => {
  try {
    const campaign = await donationRepository.findOne({ id });

    if (!campaign) {
      throw new Error('Donation not found');
    }

    return campaign;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createDonation = async (payload, user) => {
  const trx = await sequelize.transaction();
  try {
    const paymentPayload = await _buildPaymentPayload(payload, user);

    // call midtrans createPaymentLink
    const paymentOrder = await createPaymentLink(paymentPayload);

    const donationPayload = {
      donatorId: payload.donatorId,
      campaignId: payload.campaignId,
      comment: payload.comment,
      showName: payload.showName,
      createdBy: 'system',
    };

    // store donation
    const donation = await donationRepository.createDonation(donationPayload, trx);
    if (donation) {
      // store payment order
      await paymentRepository.create(
        {
          donationId: donation.id,
          orderId: paymentOrder.data.order_id,
          paymentLink: paymentOrder.data.payment_url,
          paymentType: 'digital',
          paymentExpiry: moment().add(30, 'minute').format('YYYY-MM-DD HH:mm:ss'),
          paymentStatus: 'pending',
          amount: payload.amount,
          createdBy: 'system',
        },
        trx
      );
    }

    trx.commit();
    return paymentOrder.data.payment_url;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const createManualDonation = async (payload, user) => {
  const trx = await sequelize.transaction();
  try {
    const donationPayload = {
      donatorId: payload.donatorId,
      campaignId: payload.campaignId,
      comment: payload.comment,
      createdBy: user.name,
    };

    // store donation
    const donation = await donationRepository.createDonation(donationPayload, trx);
    if (donation) {
      // store payment order
      await paymentRepository.create(
        {
          donationId: donation.id,
          paymentType: 'manual',
          paymentStatus: 'settlement',
          paymentEvidence: payload.paymentEvidence,
          amount: payload.amount,
          createdBy: 'system',
        },
        trx
      );
    }

    trx.commit();
    return donation;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const _buildPaymentPayload = async function (payload, user) {
  const paymentPayload = {
    orderId: shortUUID.uuid(),
    amount: payload.amount,
    campaign: {
      id: payload.campaignId,
      name: `campaign-${payload.campaignId}`,
    },
    customer: {
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  };

  return paymentPayload;
};

module.exports = {
  getAllDonation,
  getDonationDetail,
  createManualDonation,
  createDonation,
};
