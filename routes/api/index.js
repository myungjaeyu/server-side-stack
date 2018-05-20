const express = require('express'),
      router = express.Router();

const sum = require('./sum');

router.get('/sumd/:no', sum);

module.exports = router;