const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const httpStatus = require('http-status');
const formatResponse = require('../utils/formatResponse');
const authValidation = require('../validations/authValidation');
const authService = require('../services/authService');
const auth = require('../utils/auth');
const config = require('../config/config');

const register = async (req, res) => {
  try {
    const payload = req.body;

    const isValid = await authValidation.register().validateAsync(payload);

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    payload.password = await bcrypt.hash(payload.password, 10);

    const result = await authService.register(payload);

    return formatResponse.created({
      res,
      message: 'User successfully registered',
      data: result,
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      // handle the duplicate entry error here
      console.log('Error: Duplicate entry detected');
      return formatResponse.conflict({ res, message: 'Error: Duplicate entry detected', error });
    }
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    await authValidation.login(req);

    const payload = {
      email,
      password,
    };

    const isValid = await authValidation.login().validateAsync(payload);

    if (!isValid) {
      return formatResponse.badRequest({ res, message: isValid, isValid });
    }

    const result = await authService.login(payload);

    return formatResponse.created({
      res,
      message: 'User successfully logged in',
      data: result,
    });
  } catch (error) {
    console.log(error);
    return formatResponse.internalError({ res, message: error.message, error });
  }
};

const logout = async (req, res) => {
  try {
    const invalidate = await auth.invalidateTokens(req);

    req.header('authorization', jwt.sign(invalidate.invalidateAccessToken, config.jwt.secret));
    // req.header('x-refresh-token', jwt.sign(invalidate.invalidateRefreshToken, config.jwt.secret));

    return formatResponse.ok({
      res,
      message: 'User successfully logged out',
    });
  } catch (error) {
    console.log(error);
    return formatResponse.badRequest({ res, message: error.message, error });
  }
};

module.exports = {
  register,
  login,
  logout,
};
