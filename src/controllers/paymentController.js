const paymentService = require('../services/paymentService');
const formatResponse = require('../utils/formatResponse');

const recievePayment = async (req, res) => {
  try {
    const payload = req.body;

    const createdDonation = await paymentService.recievePayment(payload);

    return formatResponse.created({
      res,
      message: 'Payment recieved succesfully',
      data: createdDonation,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

module.exports = {
  recievePayment,
};
