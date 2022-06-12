'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects_graph_schema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projects_graph_schema.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
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
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'projects_graph_schema',
  });
  return projects_graph_schema;
};