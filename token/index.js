 const jwt = require('jsonwebtoken'),
       { jwt_secret } = require('../config');

const sign = (req, res) => jwt.sign(req.body, jwt_secret, { algorithm: 'HS256', expiresIn : 60, notBefore : 10 },
    (err, token) => res.json(err ? {} : { token : token }));

const verify = (req, res) => jwt.verify(req.params.key, jwt_secret,
    (err, decoded) => res.json(err ? {} : decoded));

module.exports = {
    sign,
    verify
};