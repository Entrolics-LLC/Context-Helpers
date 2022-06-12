'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('audits', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      action: {
        type: Sequelize.STRING
      },
      action_type: {
        type: Sequelize.STRING
      },
      action_table: {
        type: Sequelize.STRING
      },
      user_id: {
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
    await queryInterface.dropTable('audits');
  }
};