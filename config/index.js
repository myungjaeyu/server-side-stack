const bodyParser = require('body-parser');

const config = {
    port: process.env.PORT || 3000,
    uses : {
        cors : (req, res, next) => [res.header('Access-Control-Allow-Origin', '*'), res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'), next()],
        parser_json : bodyParser.json(),
        parser_urlencoded : bodyParser.urlencoded({ extended: true})
    }
};

module.exports = config;