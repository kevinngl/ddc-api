const router = require('express').Router();
const { ADMIN } = require('../constants/roleConstant');
const campaignCategoryController = require('../controllers/campaignCategoryController');
const roleAuthorization = require('../middlewares/roleAuthorization');
const validateRefreshToken = require('../middlewares/validateRefreshToken');

router.get('/', async (req, res, next) => {
  try {
    await campaignCategoryController.getAllCampaignsCategory(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validateRefreshToken, async (req, res, next) => {
  try {
    await campaignCategoryController.getCampaignCategoryById(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/create', validateRefreshToken, roleAuthorization(ADMIN), async (req, res, next) => {
  try {
    await campaignCategoryController.createCampaignCategory(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/update/:id', validateRefreshToken, roleAuthorization(ADMIN), async (req, res, next) => {
  try {
    await campaignCategoryController.updateCampaignCategory(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/delete/:id', validateRefreshToken, roleAuthorization(ADMIN), async (req, res, next) => {
  try {
    await campaignCategoryController.deleteCampaignCategory(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
