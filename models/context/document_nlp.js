'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class document_nlp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  document_nlp.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    classification_name: DataTypes.STRING,
    classification_confidence: DataTypes.STRING,
    entity_language: DataTypes.STRING,
    entity_salience: DataTypes.STRING,
    entity_type: DataTypes.STRING,
    entity_name: DataTypes.STRING,
    entity_mention_type: DataTypes.STRING,
    input_uri: DataTypes.STRING,
    form_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'document_nlp',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return document_nlp;
};