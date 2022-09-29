/* IMPORT DO SEQUELIZE */
const Sequelize = require('sequelize');
const connection = require('../database/database');

const Usuario = connection.define(
    'tbl_usuario',
    {
        email_usuario:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        senha_usuario:{
            type: Sequelize.STRING(250),
            allowNull: false,
        }
    }
);

// Usuario.sync({force:true});

module.exports = Usuario;
