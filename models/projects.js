'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    owner_id: DataTypes.STRING,
    template_id: DataTypes.STRING,
    description: DataTypes.STRING,
    project_image_url: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    retension: DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN,
    worflow_id: DataTypes.STRING,
    features: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};