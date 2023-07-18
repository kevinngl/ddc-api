const Models = require('../models');
/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.findAllCampaigns = (where, opt = {}) => {
  return Models.CampaignModel.findAndCountAll({
    where,
    include: [
      {
        model: Models.CampaignCategoryModel,
        as: 'category',
      },
      {
        model: Models.CampaignImageModel,
        as: 'image',
      },
      {
        model: Models.UserModel,
        as: 'pic',
        include: [
          {
            model: Models.RoleModel,
            as: 'role',
          },
        ],
      },
    ],
    ...opt,
  });
};

/**
 *
 * @param {Number} campaignId
 * @param {Object} opt
 * @returns <Promise>
 */
exports.findCampaignById = (campaignId, opt = {}) => {
  return Models.CampaignModel.findOne({
    where: { id: campaignId },
    include: [
      {
        model: Models.CampaignCategoryModel,
        as: 'category',
      },
      {
        model: Models.CampaignImageModel,
        as: 'image',
      },
      {
        model: Models.UserModel,
        as: 'pic',
        include: [
          {
            model: Models.RoleModel,
            as: 'role',
          },
        ],
      },
    ],
    ...opt,
  });
};

/**
 *
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.createCampaign = (payload, trx = null) => {
  return Models.CampaignModel.create(payload, { transaction: trx });
};

/**
 *
 * @param {Number} campaignId
 * @param {Object} payload
 * @param {Sequelize Transaction} trx
 * @returns <Promise>
 */
exports.updateCampaign = (campaignId, payload, trx = null) => {
  return Models.CampaignModel.update(payload, {
    where: { id: campaignId },
    transaction: trx,
  });
};

exports.approveCampaign = (campaignId, payload, trx = null) => {
  return Models.CampaignModel.update(payload, {
    where: { id: campaignId },
    transaction: trx,
  });
};

exports.rejectCampaign = (campaignId, payload, trx = null) => {
  return Models.CampaignModel.update(payload, {
    where: { id: campaignId },
    transaction: trx,
  });
};

exports.reviseCampaign = (campaignId, payload, trx = null) => {
  return Models.CampaignModel.update(payload, {
    where: { id: campaignId },
    transaction: trx,
  });
};
