'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Audits.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    action: DataTypes.STRING,
    action_type: DataTypes.STRING,
    action_table: DataTypes.STRING,
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Audits',
  });
  return Audits;
};