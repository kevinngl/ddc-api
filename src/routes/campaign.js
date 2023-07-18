const router = require('express').Router();
const { ADMIN, SUPERVISOR } = require('../constants/roleConstant');
const campaignController = require('../controllers/campaignController');
const roleAuthorization = require('../middlewares/roleAuthorization');
const validateRefreshToken = require('../middlewares/validateRefreshToken');

router.get('/', async (req, res, next) => {
  try {
    await campaignController.getAllCampaigns(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    await campaignController.getCampaignById(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/create', validateRefreshToken, roleAuthorization(ADMIN), async (req, res, next) => {
  try {
    await campaignController.createCampaign(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/update/:id', validateRefreshToken, roleAuthorization(ADMIN), async (req, res, next) => {
  try {
    await campaignController.updateCampaign(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/go-live/:id', validateRefreshToken, roleAuthorization(ADMIN), async (req, res, next) => {
  try {
    await campaignController.setCampaignLive(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/approve/:id', validateRefreshToken, roleAuthorization(SUPERVISOR), async (req, res, next) => {
  try {
    await campaignController.approveCampaign(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/reject/:id', validateRefreshToken, roleAuthorization(SUPERVISOR), async (req, res, next) => {
  try {
    await campaignController.rejectCampaign(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/revise/:id', validateRefreshToken, roleAuthorization(SUPERVISOR), async (req, res, next) => {
  try {
    await campaignController.reviseCampaign(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/delete/:id', validateRefreshToken, roleAuthorization(ADMIN), async (req, res, next) => {
  try {
    await campaignController.deleteCampaign(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
