const userService = require('../services/userService');
const formatResponse = require('../utils/formatResponse');

// Function to get user data from access token
const getUserData = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserData({ id });

    return formatResponse.ok({
      res,
      message: 'Get user data successfully',
      data: user,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.badRequest({ res, message: error.message, error });
  }
};

module.exports = {
  getUserData,
};
