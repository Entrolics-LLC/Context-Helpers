'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AiExplicitContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AiExplicitContent.init({
    artifact_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    explicit_content: DataTypes.INTEGER,
    product: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ai_explicit_content',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return AiExplicitContent;
};