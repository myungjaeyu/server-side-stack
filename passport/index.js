const localStrategy = require('./strategy/local-strategy'),
      jwtStrategy = require('./strategy/jwt-strategy'),
      auth = require('./api/auth'),
      user = require('./api/user');

module.exports = {
    localStrategy,
    jwtStrategy,
    auth,
    user
};