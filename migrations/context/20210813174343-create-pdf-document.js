'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pdf_document', {
      file_name: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      pages_count: {
        type: Sequelize.INTEGER
      },
      entities_count: {
        type: Sequelize.INTEGER
      },
      text: {
        type: 'CHARACTER VARYING(1000000)'
      },
      schema_id: {
        type: Sequelize.STRING
      }
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pdf_document');
  }
};