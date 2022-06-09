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
    template_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    source_name: DataTypes.STRING,
    target_name: DataTypes.STRING,
    source_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    target_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    relation: DataTypes.STRING,
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'TemplateGraphSchema',
  });
  return TemplateGraphSchema;
};