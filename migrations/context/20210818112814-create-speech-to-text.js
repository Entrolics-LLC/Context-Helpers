'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('speech_to_txt', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      sph_to_txt_link: {
        type: Sequelize.STRING
      },
      transcript_confidence: {
        type: Sequelize.STRING
      },
      classification_name: {
        type: Sequelize.STRING
      },
      classification_confidence: {
        type: Sequelize.STRING
      }
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('speech_to_txt');
  }
};