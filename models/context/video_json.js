'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_json extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  video_json.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    video_json: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'video_jsons',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return video_json;
};