'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Membership.hasMany(models.User, {
        foreignKey: 'userID'
      }),
      Membership.hasMany(models.Team, {
        foreignKey: 'teamID'

      });
    }
  };
  Membership.init({
    userID: {
      type: DataTypes.STRING,
      references: 'User',
      key: 'id'

    },
    teamID: {
      type: DataTypes.STRING,
      references: 'Team',
      key: 'id'

    }
  }, 
     {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};