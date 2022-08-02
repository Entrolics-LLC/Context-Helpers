'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pdf_pages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
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