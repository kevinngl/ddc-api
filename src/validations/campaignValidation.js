const Joi = require('joi');

const createCampaign = function () {
  return Joi.object({
    campaignCategoryId: Joi.number().required(),
    campaignPicId: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().allow(null),
    donationTarget: Joi.number().allow(null),
    duration: Joi.number().required(),
    startDate: Joi.date().allow(null),
    endDate: Joi.date().allow(null),
    notes: Joi.string().allow(null),
  });
};

const updateCampaign = function () {
  return Joi.object({
    id: Joi.number().required(),
    campaignCategoryId: Joi.number().allow(null),
    campaignPicId: Joi.number().allow(null),
    title: Joi.string().allow(null),
    description: Joi.string().allow(null),
    donationTarget: Joi.number().allow(null),
    donationAchieved: Joi.number().allow(null),
    duration: Joi.number().allow(null),
    startDate: Joi.date().allow(null),
    endDate: Joi.date().allow(null),
    notes: Joi.string().allow(null),
  });
};

const setCampaignLive = function () {
  return Joi.object({
    id: Joi.number().required(),
  });
};

const approveCampaign = function () {
  return Joi.object({
    id: Joi.number().required(),
  });
};

const rejectCampaign = function () {
  return Joi.object({
    id: Joi.number().required(),
  });
};

const reviseCampaign = function () {
  return Joi.object({
    id: Joi.number().required(),
    notes: Joi.string().required(),
  });
};

module.exports = {
  createCampaign,
  updateCampaign,
  approveCampaign,
  rejectCampaign,
  reviseCampaign,
  setCampaignLive,
};
