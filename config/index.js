const bodyParser = require('body-parser'),
      Sequelize = require('sequelize'),
      helmet = require('helmet'),
      session = require('express-session');

const config = {
    port: process.env.PORT || 3000,
    orm : ((database, username, password, host, dialect) => new Sequelize(database, username, password, {
            host: host, dialect: dialect,
            operatorsAliases: false,
            pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
            define: { freezeTableName: true, timestamps: false }
        })
    )(
        process.env.DB_DATABASE || 'postgres', 
        process.env.DB_USERNAME || 'postgres', 
        process.env.DB_PASSWORD || '', 
        process.env.DB_HOST || 'localhost', 
        process.env.DB_DIALECT || 'postgres'
    ),
    jwt_secret : process.env.JWT_SECRET || 'secretKEYu4bi-test-1234@#',
    oauth2_github : { client_id : process.env.GITHUB_CLIENT_ID || '', client_secret : process.env.GITHUB_CLIENT_SECRET || '', callback_url : '/auth/github/callback/' },
    oauth2_sendmail : { client_id : process.env.SENDMAIL_CLIENT_ID || '', client_secret : process.env.SENDMAIL_SECRET || '', access_token : process.env.SENDMAIL_ACCESS_TOKEN || '', refresh_token : process.env.SENDMAIL_REFRESH_TOKEN || '' },
    uses : {
        cors : (req, res, next) => [res.header('Access-Control-Allow-Origin', '*'), res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'), next()],
        parser_json : bodyParser.json(),
        parser_urlencoded : bodyParser.urlencoded({ extended: true}),
        helmet_defalut : helmet(),
        session : session({
            secret: process.env.SESSION_SECRET || 'secretKEYu4bi-test-1234@#', resave: false, saveUninitialized: true }
        )
    }
};

module.exports = config;