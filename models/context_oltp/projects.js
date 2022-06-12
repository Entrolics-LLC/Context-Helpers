'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projects.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    owner_id: DataTypes.STRING,
    template_id: DataTypes.STRING,
    description: DataTypes.STRING,
    project_image_url: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    retension: DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN,
    worflow_id: DataTypes.STRING,
    features: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'projects',
  });
  return projects;
};