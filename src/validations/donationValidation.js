const Joi = require('joi');

const createDonation = function () {
  return Joi.object({
    donatorId: Joi.number().required(),
    campaignId: Joi.number().required(),
    amount: Joi.number().required(),
    showName: Joi.string().required(),
    comment: Joi.string().allow(null),
  });
};

const createDonationManual = function () {
  return Joi.object({
    donatorId: Joi.number().required(),
    campaignId: Joi.number().required(),
    amount: Joi.number().required(),
    comment: Joi.string().allow(null),
  });
};

module.exports = {
  createDonation,
  createDonationManual,
};
