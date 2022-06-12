'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pdf_forms', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      agency_id: {
        type: Sequelize.STRING
      },
      form_name: {
        type: Sequelize.STRING
      },
      form_short_name: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_at: {
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.STRING
      },
      api_url: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pdf_forms');
  }
};