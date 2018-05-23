const express = require('express'),
      router = express.Router(),
      GraphHTTP = require('express-graphql'),
      passport = require('passport'),
      sum = require('./api/sum'),
      memo = require('./api/memo'),
      schema = require('../graphql'),
      upload = require('../upload'),
      token = require('../token'),
      { auth, user, github } = require('../passport'),
      mock_session = require('../mock-session');

router.get('/sum/:no', sum);

router.post('/memo', memo.create);
router.get('/memos', memo.selects);
router.get('/memo/:id', memo.select);
router.put('/memo/:id', memo.update);
router.delete('/memo/:id', memo.remove);

router.use('/graphql', GraphHTTP({ schema : schema, pretty : true, graphiql : true }));

router.post('/upload', upload.single, upload.callback);

router.post('/token', token.sign);
router.get('/token/:key', token.verify);

router.post('/auth', auth);
router.get('/user', user);

router.get('/mock', mock_session.join)
router.post('/mock/login', mock_session.login);
router.get('/mock/logout', mock_session.logout);

router.get('/auth/github', github.auth);
router.get('/auth/github/callback', github.callback);

module.exports = router;