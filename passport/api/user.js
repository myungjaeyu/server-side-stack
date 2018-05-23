const passport = require('passport');

module.exports = (req, res) => {

    let token = req.query.access_token;
    token && (req.headers.authorization = `Bearer ${ token }`);

    passport.authenticate('jwt', {session: false}, (err, user, info) => {

        return res.json({ info , user });

    })
    (req, res);

};