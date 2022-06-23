'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('image_web_entities', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      matching_images: {
        type: Sequelize.STRING
      },
      pages_with_images: {
        type: Sequelize.STRING
      },
      best_guess: {
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
    await queryInterface.dropTable('image_web_entities');
  }
};