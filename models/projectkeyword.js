'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectKeyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectKeyword.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    userid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    type: DataTypes.STRING,
    condition: DataTypes.STRING,
    created_at: DataTypes.DATE,
    keyword: DataTypes.STRING,
    file_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProjectKeyword',
  });
  return ProjectKeyword;
};