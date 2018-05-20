const R = require('rambda'),
      { sequelize } = require('../config');

const sum = require('./sum');

const orm = sequelize();
      
orm.authenticate().then(console.log('Connection has been established successfully.'))
                  .catch(err => console.error('Unable to connect to the database:', err));

const index = () => R.pipe(
                        R.map(e => e(orm))
                    )({
                        sum
                    });

module.exports = index;