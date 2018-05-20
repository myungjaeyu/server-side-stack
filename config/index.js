const bodyParser = require('body-parser'),
      Sequelize = require('sequelize');

const config = {
    port: process.env.PORT || 3000,
    sequelize : () => ((database, username, password, host, dialect) => new Sequelize(database, username, password, {
            host: host, dialect: dialect,
            operatorsAliases: false,
            pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
        })
    )(process.env.DB_DATABASE || 'postgres', process.env.DB_USERNAME || 'postgres', process.env.DB_PASSWORD || '', process.env.DB_HOST || 'localhost', process.env.DB_DIALECT || 'postgres'),
    uses : {
        cors : (req, res, next) => [res.header('Access-Control-Allow-Origin', '*'), res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'), next()],
        parser_json : bodyParser.json(),
        parser_urlencoded : bodyParser.urlencoded({ extended: true})
    }
};

module.exports = config;