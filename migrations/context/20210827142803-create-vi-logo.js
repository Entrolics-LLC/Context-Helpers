'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vi_logo', {
      file_name: {
        type: Sequelize.STRING
      },
      time_stamp: {
        type: Sequelize.DATE
      },
      logo_recognition_annotations: {
        type: Sequelize.JSON
      },
      segment: {
        type: Sequelize.JSON
      },
      input_uri: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vi_logo');
  }
};