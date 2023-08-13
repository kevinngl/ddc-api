const moment = require('moment/moment');
const config = require('../config/config');
const { sequelize } = require('../models');
const paymentRepository = require('../repositories/paymentRepository');
const paymentLogsRepository = require('../repositories/paymentLogsRepository');
const campaignRepository = require('../repositories/campaignRepository');
const donationRepository = require('../repositories/donationRepository');
const { generateSignatureKey } = require('../utils/midtrans');

const recievePayment = async (payload) => {
  const trx = await sequelize.transaction();
  try {
    const parsedOrderId = payload.order_id.split('-').slice(0, -1).join('-');

    if (payload.transaction_status === 'settlement') {
      const isValid = await _validatePayment({
        parsedOrderId,
        orderId: payload.order_id,
        amount: payload.gross_amount,
        signatureKey: payload.signature_key,
        statusCode: payload.status_code,
      });

      if (!isValid) {
        throw new Error('Invalid payment');
      }

      const payment = await paymentRepository.getByOrderId(parsedOrderId);
      if (payment) {
        const paymentUpdate = {
          paymentStatus: payload.transaction_status,
          orderId: payload.order_id,
          transactionId: payload.transaction_id || null,
          transactionTime: moment(payload.transaction_time).format('YYYY-MM-DD HH:mm:ss') || null,
          updatedBy: 'system',
        };

        await paymentRepository.updatePaymentStatus(paymentUpdate, { orderId: parsedOrderId }, trx);

        // logs payment status
        await paymentLogsRepository.create({ jsonBody: JSON.stringify(payload) }, trx);

        const donation = await donationRepository.findOne({ id: payment.donationId });
        if (donation) {
          const campaign = await campaignRepository.findCampaignById(donation.campaignId);

          if (!campaign) {
            throw new Error('Campaign not found');
          }

          await campaignRepository.updateCampaign(
            donation.campaignId,
            {
              donationAchieved:
                campaign.donationAchieved === null ? payment.amount : payment.amount + campaign.donationAchieved,
              updatedBy: 'system',
            },
            trx
          );
        }
      }
    }
    await trx.commit();
    return;
  } catch (error) {
    console.log(error);
    await trx.rollback();
    throw error;
  }
};

const _validatePayment = async (payload) => {
  const payment = await paymentRepository.getByOrderId(payload.parsedOrderId);

  if (payment) {
    const { serverKey } = config.midtrans;

    const key = await generateSignatureKey(payload.orderId, payload.statusCode, payload.amount, serverKey);

    if (key === payload.signatureKey) {
      return true;
    }
  }

  return false;
};

module.exports = {
  recievePayment,
};
