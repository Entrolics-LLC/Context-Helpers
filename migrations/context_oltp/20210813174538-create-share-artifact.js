'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('share_artifact', {
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('share_artifact');
  }
};