'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      owner_id: {
        type: Sequelize.STRING
      },
      template_id: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      project_image_url: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      retension: {
        type: Sequelize.INTEGER
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};