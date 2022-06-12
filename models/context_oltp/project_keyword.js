'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_keyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project_keyword.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    userId: DataTypes.STRING,
    project_id: DataTypes.STRING,
    type: DataTypes.STRING,
    condition: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    keyword: DataTypes.STRING,
    file_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'project_keyword',
  });
  return project_keyword;
};