'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class audits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  audits.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    action: DataTypes.STRING,
    action_type: DataTypes.STRING,
    action_table: DataTypes.STRING,
    user_id: DataTypes.STRING,
    project_id: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'audits',
  });
  return audits;
};