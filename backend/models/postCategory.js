// backend/models/postCategory.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PostCategory = sequelize.define('PostCategory', {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = PostCategory;
