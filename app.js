const express = require('express'),
      bodyParser = require('body-parser'),
      config = require('./config');

const app = express();

app.use('/static', express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(config.port, () => console.log(`Example app listening on port ${ config.port }!`));