const { db , DataTypes } = require('../Utils/dataBase.util');

//Create Model for Registry -> Table
const Registry = db.define('registry', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
   
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false

    },

    exitTime: {
        type: DataTypes.DATE,
        allowNull: true
    },

    status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'pending'
    },
});

module.exports = { Registry };
