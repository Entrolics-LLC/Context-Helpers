'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('assigned_artifacts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      artifact_id: {
        type: Sequelize.STRING
      },
      user_assigned_to: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('assigned_artifacts');
  }
};