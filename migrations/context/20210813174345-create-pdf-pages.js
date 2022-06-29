'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pdf_pages', {
      file_name: {
        type: Sequelize.STRING
      },
      dimensions: {
        type: Sequelize.STRING
      },
      pageNumber: {
        type: Sequelize.INTEGER
      },
      paragraphs: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pdf_pages');
  }
};