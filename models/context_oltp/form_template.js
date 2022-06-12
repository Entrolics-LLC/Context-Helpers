'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class form_template extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  form_template.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    form_name: DataTypes.STRING,
    form_url: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: DataTypes.STRING,
    form_size: DataTypes.STRING,
    original_form_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'form_template',
  });
  return form_template;
};