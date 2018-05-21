const jwt = require('jsonwebtoken'),
      passport = require('passport'),
      { jwt_secret } = require('../../config');

module.exports = (req, res, next) => {

    passport.authenticate('local', {session: false}, (err, user, info) => {
        
        return user ? 
                    req.login(user, { session: false }, (err) => res.json( { info, user, token : jwt.sign(user, jwt_secret)})) :
                    res.json({ message: 'Something is not right', user   : user });

    })
    (req, res);

};