const express = require('express'),
      bodyParser = require('body-parser'),
      config = require('./config');

const api = require('./routes/api');

const app = express();

app.use('/static', express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(api);
app.use((req, res, next) => [ res.header('Access-Control-Allow-Origin', '*'), res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'), next() ]);

app.listen(config.port, () => console.log(`Example app listening on port ${ config.port }!`));