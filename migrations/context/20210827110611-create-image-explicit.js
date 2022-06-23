'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('image_explicit', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      adult: {
        type: Sequelize.STRING
      },
      spoof: {
        type: Sequelize.STRING
      },
      medical: {
        type: Sequelize.STRING
      },
      violence: {
        type: Sequelize.STRING
      },
      racy: {
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
    await queryInterface.dropTable('image_explicit');
  }
};