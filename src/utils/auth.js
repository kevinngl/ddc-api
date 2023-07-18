const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Function to generate a new access token using the refresh token
function generateAccessToken(user) {
  const accessToken = jwt.sign({ user }, config.jwt.secret, { expiresIn: config.jwt.accessExpirationMinutes * 3600 });
  return accessToken;
}

// Function to invalidate access and refresh tokens
function invalidateTokens(req) {
  const accessToken = req.header('authorization');
  // const refreshToken = req.header('x-refresh-token');

  const invalidateAccessToken = jwt.verify(accessToken.split(' ')[1], config.jwt.secret);
  // const invalidateRefreshToken = jwt.verify(refreshToken.split(' ')[1], config.jwt.secret);

  invalidateAccessToken.exp = 0;
  // invalidateRefreshToken.exp = 0;

  return {
    invalidateAccessToken,
    // invalidateRefreshToken,
  };
}

module.exports = {
  generateAccessToken,
  invalidateTokens,
};
