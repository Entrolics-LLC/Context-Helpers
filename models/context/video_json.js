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
    file_name: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    video_json: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'video_jsons',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return video_json;
};