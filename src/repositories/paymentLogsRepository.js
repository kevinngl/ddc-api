const Models = require('../models');

/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.create = (payload, trx = null) => {
  return Models.PaymentLogsModel.create(payload, { transaction: trx });
};
