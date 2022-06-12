'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_groups', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      group_id: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      modified_by: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_groups');
  }
};