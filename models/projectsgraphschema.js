'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectsGraphSchema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectsGraphSchema.init({
    id: DataTypes.STRING,
    template_id: DataTypes.STRING,
    source_field_name: DataTypes.STRING,
    source_field_value: DataTypes.STRING,
    target_field_name: DataTypes.STRING,
    target_field_value: DataTypes.STRING,
    relation: DataTypes.STRING,
    source_id: DataTypes.STRING,
    target_id: DataTypes.STRING,
    project_name: DataTypes.STRING,
    file_name: DataTypes.STRING,
    file_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProjectsGraphSchema',
  });
  return ProjectsGraphSchema;
};