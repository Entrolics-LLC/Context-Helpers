'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pdf_pages', {
      file_name: {
        primaryKey: true,
        unique: false,
        type: Sequelize.STRING
      },
      dimensions: {
        type: Sequelize.STRING
      },
      pageNumber: {
        type: Sequelize.INTEGER
      },
      paragraphs: {
        type: 'CHARACTER VARYING(1000000)'
      }
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pdf_pages');
  }
};