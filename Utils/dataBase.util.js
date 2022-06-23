const { Sequelize , DataTypes} = require('sequelize');

//Connect to database
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Machadito',
    port: 5432,
    database: 'Registrations',
    logging: false,
});

module.exports = { db, DataTypes};