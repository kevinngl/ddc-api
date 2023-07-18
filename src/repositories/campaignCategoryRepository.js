const Models = require('../models');
/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.findAllCampaignsCategory = (where, opt = {}) => {
  return Models.CampaignCategoryModel.findAndCountAll({
    where,
    ...opt,
  });
};

/**
 *
 * @param {Number} campaignCategoryId
 * @param {Object} opt
 * @returns <Promise>
 */

exports.findCampaignCategoryById = (campaignCategoryId, opt = {}) => {
  return Models.CampaignCategoryModel.findOne({
    where: { id: campaignCategoryId },
    ...opt,
  });
};
/**
 * @returns <Promise>
 */

exports.createCampaignCategory = (payload, trx = null) => {
  return Models.CampaignCategoryModel.create(payload, { transaction: trx });
};
/**
 *
 * @param {Number} campaignCategoryId
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */

exports.updateCampaignCategory = (campaignCategoryId, payload, trx = null) => {
  return Models.CampaignCategoryModel.update(payload, {
    where: { id: campaignCategoryId },
    transaction: trx,
  });
};
