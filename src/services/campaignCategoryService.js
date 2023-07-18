const { sequelize, Op } = require('../models');
const campaignCategoryRepository = require('../repositories/campaignCategoryRepository');

const getAllCampaignsCategory = async (payload, paginate) => {
  try {
    const offset = paginate.limit * (paginate.page - 1);
    const opt = { limit: paginate.limit, offset };
    const where = {};

    if (payload.name) {
      where.name = {
        [Op.like]: `%${payload.name}%`,
      };
    }

    const campaignsCategory = await campaignCategoryRepository.findAllCampaignsCategory(where, opt);
    if (campaignsCategory.count === 0) {
      throw new Error('Data not found');
    }

    return campaignsCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCampaignCategoryById = async (campaignCategoryId) => {
  try {
    const campaignCategory = await campaignCategoryRepository.findCampaignCategoryById(campaignCategoryId);
    if (!campaignCategory) {
      throw new Error('Data not found');
    }

    return campaignCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createCampaignCategory = async (payload, userId) => {
  const trx = await sequelize.transaction();
  try {
    const categoryData = {
      ...payload,
      createdBy: userId,
    };

    const campaignCategory = await campaignCategoryRepository.createCampaignCategory(categoryData);

    trx.commit();
    return campaignCategory;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const updateCampaignCategory = async (payload, campaignCategoryId, userId) => {
  const trx = await sequelize.transaction();
  try {
    const categoryData = {
      ...payload,
      updatedBy: userId,
    };

    const campaignCategory = await campaignCategoryRepository.findCampaignCategoryById(campaignCategoryId);
    if (!campaignCategory) {
      throw new Error('Data not found');
    }

    await campaignCategoryRepository.updateCampaignCategory(campaignCategoryId, categoryData, trx);

    trx.commit();
    return;
  } catch (error) {
    console.log(error);
    trx.rollback();
    throw error;
  }
};

const deleteCampaignCategory = async (campaignCategoryId, userId) => {
  const trx = await sequelize.transaction();
  try {
    const campaignCategory = await campaignCategoryRepository.findCampaignCategoryById(campaignCategoryId);
    if (!campaignCategory) {
      throw new Error('Data not found');
    }

    await campaignCategoryRepository.updateCampaignCategory(campaignCategoryId, {
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

module.exports = {
  getCampaignCategoryById,
  getAllCampaignsCategory,
  createCampaignCategory,
  updateCampaignCategory,
  deleteCampaignCategory,
};
