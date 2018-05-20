const { orm } = require('../config'),
      Memo = require('./model/Memo');

const sum = require('./sum'),
      memo = require('./memo')

Memo.sync();

module.exports = {
    sum,
    memo
};