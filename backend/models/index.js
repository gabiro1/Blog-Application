const sequelize = require('../config/db');
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Category = require('./category');
const PostCategory = require('./postCategory');
const Media = require('./media');
const Message = require('./message');
const PasswordReset = require('./passwordReset');
const Tag = require('./tag');
const PostView = require('./postView');

// Associations
User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Comment);
Comment.belongsTo(User);

Post.belongsToMany(Category, { through: PostCategory });
Category.belongsToMany(Post, { through: PostCategory });

Post.hasMany(Media);
Media.belongsTo(Post);

User.hasMany(Message, { as: 'SentMessages', foreignKey: 'senderId' });
User.hasMany(Message, { as: 'ReceivedMessages', foreignKey: 'receiverId' });

User.hasOne(PasswordReset);
PasswordReset.belongsTo(User);

Post.hasMany(PostView);
PostView.belongsTo(Post);

module.exports = {
  sequelize,
  User,
  Post,
  Comment,
  Category,
  PostCategory,
  Media,
  Message,
  PasswordReset,
  Tag,
  PostView
};
