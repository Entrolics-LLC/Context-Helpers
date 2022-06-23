'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('document_nlp', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      classification_name: {
        type: Sequelize.STRING
      },
      classification_confidence: {
        type: Sequelize.STRING
      },
      entity_language: {
        type: Sequelize.STRING
      },
      entity_salience: {
        type: Sequelize.STRING
      },
      entity_type: {
        type: Sequelize.STRING
      },
      entity_name: {
        type: Sequelize.STRING
      },
      entity_mention_type: {
        type: Sequelize.STRING
      },
      input_uri: {
        type: Sequelize.STRING
      },
      form_type: {
        type: Sequelize.STRING
      }
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('document_nlp');
  }
};