'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vision_json', {
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vision_json');
  }
};