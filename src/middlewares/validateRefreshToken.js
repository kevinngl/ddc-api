/* eslint-disable prefer-destructuring */
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const auth = require('../utils/auth');

// Middleware to check for an expired access token and generate a new one using the refresh token
module.exports = function validateRefreshToken(req, res, next) {
  // Get token from header and separate the Bearer from the token
  let token = req.header('authorization');
  if (token) {
    token = token.split(' ')[1];
  }

  // Check if token exists and is not blacklisted
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwt.secret);

    // Add user from payload to request object
    req.user = decoded.user;

    // Check if token has expired
    if (decoded.exp < Date.now() / 1000) {
      // Get refresh token from header
      // const refreshToken = req.header('x-refresh-token');
      const refreshToken = req.header('authorization');

      // Check if refresh token exists
      if (!refreshToken) {
        return res.status(401).json({ msg: 'Access token has expired and no refresh token found' });
      }

      try {
        // Verify refresh token
        const decodedRefresh = jwt.verify(refreshToken, config.jwt.secret);

        // Generate new access token
        const newAccessToken = auth.generateAccessToken(decodedRefresh.user);

        // Add new access token to response headers
        res.header('authorization', newAccessToken);

        // Add user from refresh token to request object
        req.user = decodedRefresh.user;

        next();
      } catch (err) {
        res.status(401).json({ msg: 'Refresh token is not valid' });
      }
    } else {
      next();
    }
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
