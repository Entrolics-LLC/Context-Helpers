'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artifact_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  artifact_types.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    artifact_type_name: DataTypes.STRING,
    artifact_type_description: DataTypes.STRING,
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
    modelName: 'artifact_types',
  });
  return artifact_types;
};