const { Sequelize } = require('sequelize');

// Configurar a conexão com o banco de dados
const sequelize = new Sequelize('music_ambient', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
