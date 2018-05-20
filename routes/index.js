const express = require('express'),
      router = express.Router(),
      sum = require('./sum'),
      memo = require('./memo');

router.get('/sum/:no', sum);

router.post('/memo', memo.create);
router.get('/memos', memo.selects);
router.get('/memo/:id', memo.select);
router.put('/memo/:id', memo.update);
router.delete('/memo/:id', memo.remove);

module.exports = router;