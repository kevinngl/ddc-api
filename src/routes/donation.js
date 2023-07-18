const router = require('express').Router();
const { ADMIN } = require('../constants/roleConstant');
const donationController = require('../controllers/donationController');
const roleAuthorization = require('../middlewares/roleAuthorization');
const validateRefreshToken = require('../middlewares/validateRefreshToken');

// get all donations by campaign id
router.get('/list', async (req, res, next) => {
  try {
    await donationController.getAllDonation(req, res);
  } catch (error) {
    next(error);
  }
});

// get donation by id
router.get('/:id', validateRefreshToken, async (req, res, next) => {
  try {
    await donationController.getDonationDetail(req, res);
  } catch (error) {
    next(error);
  }
});

// create donation
router.post('/create', validateRefreshToken, async (req, res, next) => {
  try {
    await donationController.createDonation(req, res);
  } catch (error) {
    next(error);
  }
});

// create manual donation
router.post('/create/manual', validateRefreshToken, roleAuthorization(ADMIN), async (req, res, next) => {
  try {
    await donationController.createManualDonation(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
