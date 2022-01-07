const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model

// create fields/columns for Blog Post model
class Photo extends Model {}

Photo.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    photourl: {
      type: DataTypes.STRING,
    },
    cloudinary_id: {
      type: DataTypes.STRING,
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'photo'
  }
);

module.exports = Photo;