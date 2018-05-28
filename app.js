const express = require('express'),
      R = require('rambda'),
      passport = require('passport'),
      { port, uses, orm } = require('./config'),
      routes = require('./routes'),
      { localStrategy, jwtStrategy, githubStrategy } = require('./passport');

const app = express();
const http = require('http').Server(app);

orm.authenticate().then(console.log('Connection has been established successfully.')).catch(err => console.error('Unable to connect to the database:', err));
passport.use(localStrategy);
passport.use(jwtStrategy);
passport.use(githubStrategy);
app.use('/', express.static(__dirname + '/dist'));
R.map(v => app.use(v), uses);
app.use(routes);

require('./socket')(http);
http.listen(port, () => console.log(`Example app listening on port ${ port }!`));