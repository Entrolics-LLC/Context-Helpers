'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormTemplate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FormTemplate.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    form_name: DataTypes.STRING,
    form_url: DataTypes.STRING,
    created_at: DataTypes.DATE,
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    form_size: DataTypes.STRING,
    original_form_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FormTemplate',
  });
  return FormTemplate;
};