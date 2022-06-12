'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_artifact_comments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      artifact_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      status_id: {
        type: Sequelize.STRING
      },
      parent_id: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      comment_date: {
        type: Sequelize.DATE
      },
      comment_delete_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('user_artifact_comments');
  }
};