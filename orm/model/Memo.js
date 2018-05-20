const Sequelize = require('sequelize'),
      { orm } = require('../../config');

module.exports = orm.define('Memo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});