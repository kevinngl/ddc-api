const Models = require('../models');
/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.createCampaignImage = (payload, trx = null) => {
  return Models.CampaignImageModel.create(payload, { transaction: trx });
};

/**
 *
 * @param {Number} campaignId
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.updateCampaignImage = (campaignId, payload, trx = null) => {
  return Models.CampaignImageModel.update(payload, {
    where: { campaignId },
    transaction: trx,
  });
};
