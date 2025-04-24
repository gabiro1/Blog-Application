// backend/models/postView.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PostView = sequelize.define('PostView', {
  viewerIp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  viewedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

module.exports = PostView;
