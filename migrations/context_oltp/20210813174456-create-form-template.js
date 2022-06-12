'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('form_template', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      form_name: {
        type: Sequelize.STRING
      },
      form_url: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.STRING
      },
      form_size: {
        type: Sequelize.STRING
      },
      original_form_name: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('form_template');
  }
};