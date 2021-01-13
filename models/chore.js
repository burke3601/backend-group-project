'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Chore.hasMany(models.Comment,{
        foreignKey: 'itemID'
    })
   }
  };
  Chore.init({
    teamID:{
      type: DataTypes.INTEGER,
      references: 'Team',
      key: 'id'
    },
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Chore',
  });
  return Chore;
};