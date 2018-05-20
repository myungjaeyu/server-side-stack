const express = require('express'),
      config = require('./config');

const api = require('./routes/api');

const app = express();

app.use('/', express.static(__dirname + '/dist'));
for(v of config.uses) app.use(v);

app.use(api);

app.listen(config.port, () => console.log(`Example app listening on port ${ config.port }!`));