const passport = require('passport');

const auth = passport.authenticate('github');

const callback = (req, res) => passport.authenticate('github', { failureRedirect: '/login' }, (err, user, info) => {

    return res.json({ info , user });

})
(req, res);

module.exports = {
    auth,
    callback
};