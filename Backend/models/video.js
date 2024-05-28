const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Genre = require('./genre');

const Video = sequelize.define('Video', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file_path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Genre,
      key: 'id'
    }
  }
}, {
  tableName: 'videos',
  timestamps: false
});

module.exports = Video;
