const router = require('express').Router();
const authController = require('../controllers/authController');
const validateRefreshToken = require('../middlewares/validateRefreshToken');

router.post('/login', async (req, res, next) => {
  try {
    await authController.login(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    await authController.register(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.get('/logout', validateRefreshToken, async (req, res, next) => {
  try {
    await authController.logout(req, res, next);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
