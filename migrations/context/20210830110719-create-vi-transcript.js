'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vi_transcript', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      input_uri: {
        type: Sequelize.STRING
      },
      transcript: {
        type: Sequelize.STRING
      },
      confidence: {
        type: Sequelize.STRING
      },
      word: {
        type: Sequelize.JSON
      }
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vi_transcript');
  }
};