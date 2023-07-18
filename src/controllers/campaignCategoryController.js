const campaignCategoryService = require('../services/campaignCategoryService');
const campaignCategoryValidation = require('../validations/campaignCategoryValidation');
const formatResponse = require('../utils/formatResponse');

const getAllCampaignsCategory = async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;

    const payload = { ...req.query };
    const paginate = { page, limit };

    const campaignsCategory = await campaignCategoryService.getAllCampaignsCategory(payload, paginate);
    const { count, rows } = campaignsCategory;

    const response = formatResponse.prepareListResponse(page, count, rows, limit);

    return formatResponse.ok({
      res,
      message: 'Success get all campaign category',
      data: response,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const getCampaignCategoryById = async (req, res) => {
  try {
    const campaignCategoryId = req.params.id;

    const campaignCategory = await campaignCategoryService.getCampaignCategoryById(campaignCategoryId);

    return formatResponse.ok({
      res,
      message: 'Success get campaign category by id',
      data: campaignCategory,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const createCampaignCategory = async (req, res) => {
  try {
    const { user } = req;
    const categoryData = req.body;
    const isValid = await campaignCategoryValidation.createCampaignCategory().validateAsync(categoryData);

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const createdCampaignCategory = await campaignCategoryService.createCampaignCategory(categoryData, user.id);

    return formatResponse.created({
      res,
      message: 'Campaign Category succesfully created',
      data: createdCampaignCategory,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const updateCampaignCategory = async (req, res) => {
  try {
    const campaignCategoryId = req.params.id;
    const categoryData = req.body;
    categoryData.id = campaignCategoryId;

    const isValid = await campaignCategoryValidation.updateCampaignCategory().validateAsync(categoryData);

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const updatedCampaignCategory = await campaignCategoryService.updateCampaignCategory(categoryData, campaignCategoryId);

    return formatResponse.ok({
      res,
      message: 'Campaign Category succesfully updated',
      data: updatedCampaignCategory,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const deleteCampaignCategory = async (req, res) => {
  try {
    const campaignCategoryId = req.params.id;
    const isValid = await campaignCategoryValidation.deleteCampaign().validateAsync(campaignCategoryId);

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const deletedCampaignCategory = await campaignCategoryService.deleteCampaignCategory(campaignCategoryId);

    return formatResponse.ok({
      res,
      message: 'Campaign Category succesfully deleted',
      data: deletedCampaignCategory,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

module.exports = {
  createCampaignCategory,
  updateCampaignCategory,
  deleteCampaignCategory,
  getCampaignCategoryById,
  getAllCampaignsCategory,
};
