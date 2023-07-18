const crypto = require('crypto');
const axios = require('axios');
const shortUUID = require('short-uuid');
const config = require('../config/config');

async function createPaymentLink(payload) {
  const url = `${config.midtrans.url}v1/payment-links`;
  const credentials = Buffer.from(`${config.midtrans.serverKey}:`).toString('base64');
  const authHeader = `Basic ${credentials}`;

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: authHeader,
  };

  const data = {
    transaction_details: {
      order_id: payload.orderId,
      gross_amount: payload.amount,
      payment_link_id: shortUUID.uuid(),
    },
    credit_card: {
      secure: true,
    },
    usage_limit: 1,
    expiry: {
      duration: 30,
      unit: 'minutes',
    },
    item_details: [
      {
        id: payload.campaign.id,
        name: payload.campaign.name,
        price: payload.amount,
        quantity: 1,
      },
    ],
    enabled_payments: ['gopay', 'bca_va', 'bni_va', 'bri_va', 'indomaret', 'alfamart', 'shopeepay'],
    customer_details: {
      first_name: payload.customer.name,
      email: payload.customer.email,
      phone: payload.customer.phone,
    },
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response;
  } catch (error) {
    console.log(error.response.data.error_messages);
    throw error;
  }
}

async function getOrderStatus(orderId) {
  const url = `${config.midtrans.url}v2/${orderId}/status`;
  const credentials = Buffer.from(`${config.midtrans.serverKey}:`).toString('base64');
  const authHeader = `Basic ${credentials}`;

  const headers = {
    Accept: 'application/json',
    Authorization: authHeader,
  };

  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (error) {
    console.error(error);
  }
}

function generateSignatureKey(orderId, statusCode, grossAmount, serverkey) {
  const data = orderId + statusCode + grossAmount + serverkey;
  const hash = crypto.createHash('sha512').update(data).digest('hex');
  return hash;
}

module.exports = {
  createPaymentLink,
  getOrderStatus,
  generateSignatureKey,
};
