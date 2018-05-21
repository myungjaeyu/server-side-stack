const passportJWT = require("passport-jwt"),
      JWTStrategy = passportJWT.Strategy,
      ExtractJWT = passportJWT.ExtractJwt,
      { jwt_secret } = require('../../config');

module.exports = new JWTStrategy({ jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), secretOrKey : jwt_secret },
                                    (payload, cb) => {

                                        let user = { payload };

                                        console.log('jwt stategy - ', payload);
                                        return user ? cb(null, user, { message: 'Logged In Successfully'}) : cb(null, false);
                                    });