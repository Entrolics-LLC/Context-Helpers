'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TemplateGraphSchema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TemplateGraphSchema.init({
    template_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    source_name: DataTypes.STRING,
    target_name: DataTypes.STRING,
    source_id: DataTypes.STRING,
    target_id: DataTypes.STRING,
    relation: DataTypes.STRING,
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'template_graph_schema',
  });
  return TemplateGraphSchema;
};