const express = require('express'),
      { port, uses } = require('./config'),
      R = require('rambda');

const routes = require('./routes');

const app = express();

app.use('/', express.static(__dirname + '/dist'));

R.map(v => app.use(v), uses);

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${ port }!`));