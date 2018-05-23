const GitHubStrategy = require('passport-github').Strategy,
      { oauth2_github } = require('../../config');

module.exports = new GitHubStrategy({ clientID: oauth2_github.client_id, clientSecret: oauth2_github.client_secret, callbackURL: oauth2_github.callback_url },
                                    (accessToken, refreshToken, profile, cb) => {

                                        let user = { accessToken, ...{ username : profile.username, email : profile._json.email } };

                                        console.log('github stategy - ', user);
                                        return user ? cb(null, user, { message: 'Logged In Successfully'}) : cb(null, false);
                                    });