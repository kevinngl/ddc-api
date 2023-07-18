const campaignService = require('../services/campaignService');
const campaignValidation = require('../validations/campaignValidation');
const formatResponse = require('../utils/formatResponse');

const getAllCampaigns = async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;

    const payload = { ...req.query };
    const paginate = { page, limit };

    const campaigns = await campaignService.getAllCampaigns(payload, paginate);
    const { count, rows } = campaigns;

    const response = formatResponse.prepareListResponse(page, count, rows, limit);

    return formatResponse.ok({
      res,
      message: 'Success get all campaigns',
      data: response,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const getCampaignById = async (req, res) => {
  try {
    const campaignId = req.params.id;

    const campaign = await campaignService.getCampaignById(campaignId);

    return formatResponse.ok({
      res,
      message: 'Success get campaign by id',
      data: campaign,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const createCampaign = async (req, res) => {
  try {
    const { filePath, ...campaignData } = req.body;
    const isValid = await campaignValidation.createCampaign().validateAsync(campaignData);

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    // Assign a default value if filePath is not provided
    const sanitizedFilePath = filePath || '';

    const createdCampaign = await campaignService.createCampaign(campaignData, sanitizedFilePath);

    return formatResponse.created({
      res,
      message: 'Campaign successfully created',
      data: createdCampaign,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const updateCampaign = async (req, res) => {
  try {
    const { user } = req;
    const campaignId = req.params.id;
    const { filePath, ...campaignData } = req.body;
    campaignData.id = campaignId;

    const isValid = await campaignValidation.updateCampaign().validateAsync(campaignData);

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const sanitizedFilePath = filePath || '';

    const updatedCampaign = await campaignService.updateCampaign(campaignData, user.id, campaignId, sanitizedFilePath);

    return formatResponse.ok({
      res,
      message: 'Campaign succesfully updated',
      data: updatedCampaign,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const setCampaignLive = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    const isValid = await campaignValidation.setCampaignLive().validateAsync({ id });

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const goLive = await campaignService.setCampaignLive(id, user.id);

    return formatResponse.ok({
      res,
      message: 'Campaign set to live succesfully',
      data: goLive,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const approveCampaign = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    const isValid = await campaignValidation.approveCampaign().validateAsync({ id });

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const approvedCampaign = await campaignService.approveCampaign(id, user.id);

    return formatResponse.ok({
      res,
      message: 'Campaign succesfully approved',
      data: approvedCampaign,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const rejectCampaign = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;
    const isValid = await campaignValidation.rejectCampaign().validateAsync({ id });

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const rejectedCampaign = await campaignService.rejectCampaign(id, user.id);

    return formatResponse.ok({
      res,
      message: 'Campaign succesfully rejected',
      data: rejectedCampaign,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const reviseCampaign = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;
    const { notes } = req.body;

    const payload = {
      notes,
    };

    const isValid = await campaignValidation.reviseCampaign().validateAsync({ id, notes });

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const revisedCampaign = await campaignService.reviseCampaign(id, payload, user.id);

    return formatResponse.ok({
      res,
      message: 'Request revise campaign succesfully',
      data: revisedCampaign,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const deleteCampaign = async (req, res) => {
  try {
    const campaignId = req.params.id;
    const isValid = await campaignValidation.deleteCampaign().validateAsync(campaignId);
    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }
    const deletedCampaign = await campaignService.deleteCampaign(campaignId);

    if (!deletedCampaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found',
      });
    }

    return formatResponse.ok({
      res,
      message: 'Campaign succesfully deleted',
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

module.exports = {
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getCampaignById,
  getAllCampaigns,
  approveCampaign,
  reviseCampaign,
  rejectCampaign,
  setCampaignLive,
};
