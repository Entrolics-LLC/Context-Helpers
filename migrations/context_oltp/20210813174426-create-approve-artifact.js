'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('approve_artifact', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      artifact_id: {
        type: Sequelize.STRING
      },
      share_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      approved_by: {
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
    await queryInterface.dropTable('approve_artifact');
  }
};