'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class external_source_connections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  external_source_connections.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    source_name: DataTypes.STRING,
    user_id: DataTypes.STRING,
    source_email: DataTypes.STRING,
    configurations: 'CHARACTER VARYING(1000000)',
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    box_user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'external_source_connections',
    createdAt: false,
    updatedAt: false
  });
  return external_source_connections;
};