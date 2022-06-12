'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VisionJsons', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      vision_json: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('VisionJsons');
  }
};