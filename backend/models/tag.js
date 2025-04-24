// backend/models/tag.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Tag = sequelize.define('Tag', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
});

module.exports = Tag;
