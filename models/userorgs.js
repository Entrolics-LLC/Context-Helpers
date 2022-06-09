'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserOrgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserOrgs.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    organization_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserOrgs',
  });
  return UserOrgs;
};