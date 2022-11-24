const Sequelize = require('sequelize');
const { databaseVersion } = require('../database/database');
const connection = require('../database/database');

const Usuario = connection.define(
    'tbl_usuario',
    {
        titulo_nota:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        anotacao:{
            type: Sequelize.STRING(300),
            allowNull: false,
        },
        date:{
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        }
    }
);

// Usuario.sync({force:true});

module.exports = Usuario;
