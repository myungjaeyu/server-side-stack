const passport = require('passport');

module.exports = (req, res) => {

    passport.authenticate('jwt', {session: false}, (err, user, info) => {

        return res.json({ info , user });

    })
    (req, res);

};