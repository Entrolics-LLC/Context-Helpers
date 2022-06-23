'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('image_label', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.STRING
      },
      input_uri: {
        type: Sequelize.STRING
      }
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('image_label');
  }
};