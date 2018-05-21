const express = require('express'),
      router = express.Router(),
      GraphHTTP = require('express-graphql'),
      sum = require('./sum'),
      memo = require('./memo'),
      schema = require('../graphql');

router.get('/sum/:no', sum);

router.post('/memo', memo.create);
router.get('/memos', memo.selects);
router.get('/memo/:id', memo.select);
router.put('/memo/:id', memo.update);
router.delete('/memo/:id', memo.remove);

router.use('/graphql', GraphHTTP({ schema : schema, pretty : true, graphiql : true }));

module.exports = router;