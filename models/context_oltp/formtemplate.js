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
  };
  FormTemplate.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    form_name: DataTypes.STRING,
    form_url: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    },
    user_id: DataTypes.STRING,
    form_size: DataTypes.STRING,
    original_form_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'form_template',
  });
  return FormTemplate;
};