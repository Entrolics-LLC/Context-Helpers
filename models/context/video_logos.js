'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_logos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  video_logos.init({
    created_at: DataTypes.DATE,
    file_name: DataTypes.STRING,
    name: DataTypes.STRING,
    start_time: DataTypes.INTEGER,
    end_time: DataTypes.INTEGER,
    confidence: DataTypes.FLOAT,
    json:'CHARACTER VARYING(1000000)',
    language: DataTypes.STRING,
    entity_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'video_logos',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return video_logos;
};