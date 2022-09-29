/*IMPORT DO SEQUELIZE*/
const Sequelize = require('sequelize');

const connection = new Sequelize(
    'bloco_de_notas',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;