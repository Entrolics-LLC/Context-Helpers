'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vi_explicit', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      explicit_content: {
        type: Sequelize.STRING
      },
      frame_time: {
        type: Sequelize.INTEGER
      },
      input_uri: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vi_explicit');
  }
};