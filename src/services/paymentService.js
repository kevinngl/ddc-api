const moment = require('moment/moment');
const config = require('../config/config');
const { sequelize } = require('../models');
const paymentRepository = require('../repositories/paymentRepository');
const campaignRepository = require('../repositories/campaignRepository');
const donationRepository = require('../repositories/donationRepository');
const { generateSignatureKey } = require('../utils/midtrans');

const recievePayment = async (payload) => {
  const trx = await sequelize.transaction();
  try {
    const parsedOrderId = payload.order_id.split('-').slice(0, -1).join('-');

    const isValid = await _validatePayment({
      parsedOrderId,
      orderId: payload.order_id,
      signatureKey: payload.signature_key,
      statusCode: payload.status_code,
    });

    if (!isValid) {
      throw new Error('Invalid payment');
    }

    const payment = await paymentRepository.getByOrderId(parsedOrderId);
    if (payment) {
      await paymentRepository.updatePaymentStatus(
        {
          paymentStatus: payload.transaction_status,
          orderId: payload.order_id,
          transactionId: payload.transaction_id,
          transactionTime: moment(payload.transaction_time).format('YYYY-MM-DD HH:mm:ss'),
          updatedBy: 'system',
        },
        { orderId: parsedOrderId },
        trx
      );

      const donation = await donationRepository.findOne({ orderId: parsedOrderId });
      if (donation) {
        const campaign = await campaignRepository.findCampaignById(donation.campaignId);

        if (!campaign) {
          throw new Error('Campaign not found');
        }

        await campaignRepository.updateCampaign(
          donation.campaignId,
          {
            donationAchieved: payment.amount + campaign.donationAchieved,
            updatedBy: 'system',
          },
          trx
        );
      }
    }
    trx.commit();
    return;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const _validatePayment = async (payload) => {
  const payment = await paymentRepository.getByOrderId(payload.parsedOrderId);

  if (payment) {
    const { amount } = payment;
    const { serverKey } = config.midtrans;

    const key = await generateSignatureKey(payload.orderId, payload.statusCode, amount, serverKey);

    if (key === payload.signatureKey) {
      return true;
    }
  }

  return false;
};

module.exports = {
  recievePayment,
};
