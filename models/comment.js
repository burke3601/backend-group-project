'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Chore),
      Comment.belongsTo(models.User)
    }
  };
  Comment.init({
    itemID: {
      type: DataTypes.INTEGER,
      references: 'Chore',
      key: 'id'
    },
    userID: {
      type: DataTypes.INTEGER,
      references: 'User',
      key: 'id'
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};