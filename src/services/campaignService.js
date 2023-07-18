const moment = require('moment');
const { sequelize, Op } = require('../models');
const campaignRepository = require('../repositories/campaignRepository');
const campaignImageRepository = require('../repositories/campaignImageRepository');

const {
  APPROVE_NOT_ALLOWED,
  GO_LIVE_NOT_ALLOWED,
  REQUEST_REVISION_NOT_ALLOWED,
  REVISION_REQUESTED,
  WAITING_FOR_APPROVAL,
} = require('../constants/statusConstan');

const getAllCampaigns = async (payload, paginate) => {
  try {
    const offset = paginate.limit * (paginate.page - 1);
    const opt = {
      limit: paginate.limit,
      offset,
      order: [
        ['updatedAt', 'DESC'],
        ['createdAt', 'DESC'],
      ],
    };
    const where = {};

    if (payload.title) {
      where.title = {
        [Op.like]: `%${payload.title}%`,
      };
    }

    if (payload.status) {
      where.status = {
        [Op.in]: [payload.status],
      };
    }

    if (payload.campaignCategoryId) {
      where.campaignCategoryId = payload.campaignCategoryId;
    }

    const campaigns = await campaignRepository.findAllCampaigns(where, opt);

    return campaigns;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCampaignById = async (campaignId) => {
  try {
    const campaign = await campaignRepository.findCampaignById(campaignId);

    if (!campaign) {
      throw new Error('Campaign not found');
    }

    const result = {
      ...campaign.dataValues,
    };

    result.startDate = moment(campaign.startDate).format('YYYY-MM-DD');
    result.endDate = moment(campaign.endDate).format('YYYY-MM-DD');

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createCampaign = async (payload, filePath) => {
  const trx = await sequelize.transaction();
  try {
    const campaignData = {
      ...payload,
      status: 'waiting-for-approval',
      createdBy: payload.campaignPicId,
    };

    const campaign = await campaignRepository.createCampaign(campaignData);

    if (campaign) {
      await campaignImageRepository.createCampaignImage({ campaignId: campaign.id, filePath });
    }

    trx.commit();
    return campaign;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const updateCampaign = async (payload, userId, campaignId, filePath) => {
  const trx = await sequelize.transaction();
  try {
    const campaign = await campaignRepository.findCampaignById(campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    const campaignData = {
      ...payload,
      updatedBy: userId,
    };

    if (campaign.status === REVISION_REQUESTED) {
      campaignData.status = WAITING_FOR_APPROVAL;
    }

    const update = await campaignRepository.updateCampaign(campaignId, campaignData, trx);

    if (update) {
      await campaignImageRepository.updateCampaignImage(campaignId, { filePath }, trx);
    }

    trx.commit();
    return;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const deleteCampaign = async (campaignId, userId) => {
  const trx = await sequelize.transaction();
  try {
    const campaign = await campaignRepository.findCampaignById(campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    await campaignRepository.updateCampaign(campaignId, {
      deletedBy: userId,
      deletedAt: new Date(),
    });

    trx.commit();
    return;
  } catch (error) {
    trx.rollback();
    console.log(error);
    throw error;
  }
};

const setCampaignLive = async (campaignId, user) => {
  const trx = await sequelize.transaction();
  try {
    const campaign = await campaignRepository.findCampaignById(campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    if (GO_LIVE_NOT_ALLOWED.includes(campaign.status)) {
      throw new Error('Not allowed');
    }

    const campaignData = {
      status: 'live',
      startDate: new Date(),
      endDate: moment(new Date()).add(campaign.duration, 'day').startOf('day'),
      updatedBy: user.id,
    };

    await campaignRepository.updateCampaign(campaignId, campaignData, trx);

    trx.commit();
    return;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const approveCampaign = async (campaignId, user) => {
  const trx = await sequelize.transaction();
  try {
    const campaign = await campaignRepository.findCampaignById(campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    if (APPROVE_NOT_ALLOWED.includes(campaign.status)) {
      throw new Error('Not allowed');
    }

    const campaignData = {
      status: 'approved',
      notes: null,
      updatedBy: user.id,
    };

    await campaignRepository.approveCampaign(campaignId, campaignData, trx);
    trx.commit();
    return;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const rejectCampaign = async (campaignId, user) => {
  const trx = await sequelize.transaction();
  try {
    const campaign = await campaignRepository.findCampaignById(campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    if (APPROVE_NOT_ALLOWED.includes(campaign.status)) {
      throw new Error('Not allowed');
    }

    const campaignData = {
      status: 'rejected',
      updatedBy: user.id,
    };

    await campaignRepository.rejectCampaign(campaignId, campaignData, trx);
    trx.commit();
    return;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const reviseCampaign = async (campaignId, payload, user) => {
  const trx = await sequelize.transaction();
  try {
    const campaign = await campaignRepository.findCampaignById(campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    if (REQUEST_REVISION_NOT_ALLOWED.includes(campaign.status)) {
      throw new Error('Not allowed');
    }

    const campaignData = {
      status: 'request-revision',
      ...payload,
      updatedBy: user.id,
    };

    await campaignRepository.reviseCampaign(campaignId, campaignData, trx);
    trx.commit();
    return;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

module.exports = {
  getCampaignById,
  getAllCampaigns,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  approveCampaign,
  rejectCampaign,
  reviseCampaign,
  setCampaignLive,
};
