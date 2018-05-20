const express = require('express'),
      R = require('rambda'),
      { port, uses, orm } = require('./config'),
      routes = require('./routes');

const app = express();

orm.authenticate().then(console.log('Connection has been established successfully.')).catch(err => console.error('Unable to connect to the database:', err));
app.use('/', express.static(__dirname + '/dist'));
R.map(v => app.use(v), uses);
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${ port }!`));