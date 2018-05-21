const { orm } = require('../config'),
      Memo = require('./model/Memo');

const sum = require('./api/sum'),
      memo = require('./api/memo')

Memo.sync();

module.exports = {
    sum,
    memo
};