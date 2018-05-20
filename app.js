const express = require('express'),
      config = require('./config');

const app = express();

app.use('/static', express.static(__dirname + '/dist'));

app.listen(config.port, () => console.log(`Example app listening on port ${ config.port }!`));