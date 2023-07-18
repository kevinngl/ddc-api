const router = require('express').Router();
const paymentController = require('../controllers/paymentController');

router.post('/recieve-payment', async (req, res, next) => {
  try {
    await paymentController.recievePayment(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
