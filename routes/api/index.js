const express = require('express'),
      router = express.Router();

router.get('/test/:no', (req, res) => res.json({no : req.params.no, data : req.body }));

module.exports = router;