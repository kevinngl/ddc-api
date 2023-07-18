const router = require('express').Router();
const userController = require('../controllers/userController');
const validateRefreshToken = require('../middlewares/validateRefreshToken');

router.get('/:id', validateRefreshToken, async (req, res, next) => {
  try {
    await userController.getUserData(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
