const localStrategy = require('./strategy/local-strategy'),
      jwtStrategy = require('./strategy/jwt-strategy'),
      githubStrategy = require('./strategy/github-strategy'),
      auth = require('./api/auth'),
      user = require('./api/user'),
      github = require('./api/github');

module.exports = {
    localStrategy,
    jwtStrategy,
    githubStrategy,
    auth,
    user,
    github
};