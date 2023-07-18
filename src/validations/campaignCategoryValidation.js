const Joi = require('joi');

const createCampaignCategory = function () {
  return Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null),
  });
};

const updateCampaignCategory = function () {
  return Joi.object({
    id: Joi.number().required(),
    name: Joi.string().allow(null),
    description: Joi.string().allow(null),
  });
};

module.exports = {
  createCampaignCategory,
  updateCampaignCategory,
};
