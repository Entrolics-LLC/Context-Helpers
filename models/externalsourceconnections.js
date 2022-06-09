'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExternalSourceConnections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExternalSourceConnections.init({
    id: DataTypes.STRING,
    source_name: DataTypes.STRING,
    user_id: DataTypes.STRING,
    source_email: DataTypes.STRING,
    configurations: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    box_user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ExternalSourceConnections',
  });
  return ExternalSourceConnections;
};