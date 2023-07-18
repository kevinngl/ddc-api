const Joi = require('joi');
const { password } = require('./customValidation');

const register = function () {
  return Joi.object().keys({
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  });
};

const login = function () {
  return Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
};

const logout = function () {
  return Joi.object().keys({
    refreshToken: Joi.string().required(),
  });
};

const refreshTokens = function () {
  return Joi.object().keys({
    refreshToken: Joi.string().required(),
  });
};

const forgotPassword = function () {
  return Joi.object().keys({
    email: Joi.string().email().required(),
  });
};

const resetPassword = function () {
  return Joi.object().keys({
    token: Joi.string().required(),
    password: Joi.string().required().custom(password),
  });
};

const verifyEmail = function () {
  return Joi.object().keys({
    token: Joi.string().required(),
  });
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
};
