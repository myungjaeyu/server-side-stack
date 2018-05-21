const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({ usernameField: 'email', passwordField: 'password'},
                                    (email, password, cb) => {

                                        let user = { email, password };

                                        console.log('local stategy - ', email, password);
                                        return user ? cb(null, user, { message: 'Logged In Successfully'}) : cb(null, false)
                                    });