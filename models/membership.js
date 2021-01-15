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
      
      
  }
};
    
  Membership.init({
    userID: {
      type: DataTypes.INTEGER,
      references: 'User',
      key: 'id'
    },
    teamID: {
      type: DataTypes.INTEGER,
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