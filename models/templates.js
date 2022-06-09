'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Templates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Templates.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    template_name: DataTypes.STRING,
    file_address: DataTypes.STRING,
    is_custom: DataTypes.BOOLEAN,
    is_ready: DataTypes.BOOLEAN,
    processor_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    custom_endpoint: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    description: DataTypes.STRING,
    visibility: DataTypes.STRING,
    shared_with: DataTypes.STRING,
    shared_with_users: DataTypes.STRING,
    created_by: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Templates',
  });
  return Templates;
};