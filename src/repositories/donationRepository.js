const Models = require('../models');
/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.findAllDonation = (where, opt = {}) => {
  return Models.DonationModel.findAndCountAll({
    where,
    include: [
      {
        model: Models.CampaignModel,
        as: 'campaign',
      },
      {
        model: Models.UserModel,
        as: 'donator',
      },
      {
        model: Models.PaymentModel,
        as: 'payment',
        where: { payment_status: 'settlement' },
      },
    ],
    ...opt,
    logging: console.log,
  });
};

/**
 *
 * @param {Object} where
 * @param {Object} opt
 * @returns <Promise>
 */
exports.findOne = (where, opt) => {
  return Models.DonationModel.findOne({
    where,
    include: [
      // {
      //   model: Models.CampaignModel,
      //   as: 'campaign',
      // },
      {
        model: Models.UserModel,
        as: 'donator',
      },
      {
        model: Models.PaymentModel,
        as: 'payment',
      },
    ],
    logging: console.log,
    ...opt,
  });
};

/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.createDonation = (payload, trx = null) => {
  return Models.DonationModel.create(payload, { transaction: trx });
};
