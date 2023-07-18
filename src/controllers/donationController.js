const { USER } = require('../constants/roleConstant');
const donationService = require('../services/donationService');
const formatResponse = require('../utils/formatResponse');
const donationValidation = require('../validations/donationValidation');

const getAllDonation = async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;

    const payload = { ...req.query };
    const paginate = { page, limit };

    const { user } = req;
    if (user && user.role.name === USER) {
      payload.donatorId = user.id;
    }

    const donations = await donationService.getAllDonation(payload, paginate);
    const { count, rows } = donations;

    const response = formatResponse.prepareListResponse(page, count, rows, limit);

    return formatResponse.ok({
      res,
      message: 'Success get all donations by campaign id',
      data: response,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const getDonationDetail = async (req, res) => {
  try {
    const { id } = req.query;

    const donation = await donationService.getDonationDetail(id);

    return formatResponse.ok({
      res,
      message: 'Success get donation by id',
      data: donation,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const createDonation = async (req, res) => {
  try {
    const donationData = req.body;
    const { user } = req;
    donationData.donatorId = user.id;

    const isValid = await donationValidation.createDonation().validateAsync(donationData);

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const createdDonation = await donationService.createDonation(donationData, user);

    return formatResponse.created({
      res,
      message: 'Donation succesfully created',
      data: createdDonation,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const createManualDonation = async (req, res) => {
  try {
    const donationData = req.body;

    const createdDonation = await donationService.createManualDonation(donationData);

    return formatResponse.created({
      res,
      message: 'Donation succesfully created',
      data: createdDonation,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

module.exports = {
  getAllDonation,
  getDonationDetail,
  createDonation,
  createManualDonation,
};
