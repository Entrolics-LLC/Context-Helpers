'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('share_artifacts', {
      artifact_id: {
        allowNull: false,
        primaryKey: true,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('share_artifacts');
  }
};