const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('OK!');
});

router.use('/user', require('./user'));
router.use('/auth', require('./auth'));
router.use('/campaign', require('./campaign'));
router.use('/category', require('./category'));
router.use('/donation', require('./donation'));
router.use('/payment', require('./payment'));

module.exports = router;
