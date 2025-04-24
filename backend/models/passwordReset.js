// backend/models/passwordReset.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PasswordReset = sequelize.define('PasswordReset', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = PasswordReset;
