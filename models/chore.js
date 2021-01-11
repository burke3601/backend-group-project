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
      // define association here
      Chore.belongsTo(models.Team)
      Chore.hasMany(models.Comment)
    }
  };
  Chore.init({
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN,
    teamID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chore',
  });
  return Chore;
};