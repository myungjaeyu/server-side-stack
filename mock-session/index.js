const join = (req, res) => res.send(`isToken : ${ req.session.hasOwnProperty('token') }`);

const login = (req, res) => ((req.body.email === 'email123@example.com' && req.body.password === 'password123') && Object.assign(req.session, req.session, { token : 'token123' }),
                            res.redirect('/mock'));

const logout = (req, res) => req.session.destroy(err => !err && res.redirect('/mock'));

module.exports = {
    join,
    login,
    logout
};