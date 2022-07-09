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
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    template_name: DataTypes.STRING,
    file_address: DataTypes.STRING,
    is_custom: DataTypes.BOOLEAN,
    is_ready: DataTypes.BOOLEAN,
    processor_id: DataTypes.STRING,
    custom_endpoint: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: DataTypes.STRING,
    visibility: DataTypes.STRING,
    shared_with: DataTypes.STRING,
    shared_with_users: DataTypes.STRING,
    created_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'templates',
    schema: 'context'
  });
  return Templates;
};