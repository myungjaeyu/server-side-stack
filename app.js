const express = require('express'),
      config = require('./config'),
      R = require('rambda');

const api = require('./routes/api');

const app = express();

app.use('/', express.static(__dirname + '/dist'));

R.map(v => app.use(v), config.uses);

app.use(api);

app.listen(config.port, () => console.log(`Example app listening on port ${ config.port }!`));