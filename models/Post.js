const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model

// create fields/columns for Blog Post model
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // user_id is key and how the tables connect
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        modelName: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;