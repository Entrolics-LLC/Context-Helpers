'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vision_json', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      vision_json: {
        type: Sequelize.STRING
      },
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vision_json');
  }
};