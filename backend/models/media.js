// backend/models/media.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Media = sequelize.define('Media', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('image', 'video', 'audio', 'document'),
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Media;
