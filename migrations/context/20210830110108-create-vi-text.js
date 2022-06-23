'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vi_text', {
      file_name: {
        type: Sequelize.STRING
      },
      time_stamp: {
        type: Sequelize.DATE
      },
      text_annotations: {
        type: Sequelize.JSON
      },
      segment: {
        type: Sequelize.JSON
      },
      input_uri: {
        type: Sequelize.STRING
      }
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vi_text');
  }
};