const conn = require('./connection');
const Sequelize = require('sequelize');


const Auction = conn.define('auction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    completeDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    tableName: 'Auction',
});

module.exports = Auction