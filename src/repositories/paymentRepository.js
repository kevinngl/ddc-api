const Models = require('../models');

/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.create = (payload, trx = null) => {
  return Models.PaymentModel.create(payload, { transaction: trx });
};

/**
 *
 * @param {String} orderId
 * @returns <Promise>
 */
exports.getByOrderId = (orderId) => {
  return Models.PaymentModel.findOne({ where: { orderId } });
};

/**
 * Update payment status
 * @param {Oject} payload
 * @param {Object} opt
 * @param {Sequelize Transaction} trx
 */
exports.updatePaymentStatus = (payload, opt, trx = null) => {
  return Models.PaymentModel.update({ ...payload }, { where: { ...opt }, transaction: trx });
};
