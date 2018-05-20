const bodyParser = require('body-parser');

const config = {
    port: process.env.PORT || 3000,
    uses : [
        (req, res, next) => [res.header('Access-Control-Allow-Origin', '*'), res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'), next()],
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true})
    ]
};

module.exports = config;