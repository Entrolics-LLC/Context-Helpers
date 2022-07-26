'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('video_logos', {
      created_at: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.INTEGER
      },
      end_time: {
        type: Sequelize.INTEGER
      },
      confidence: {
        type: Sequelize.FLOAT
      },
      json: {
        type: 'CHARACTER VARYING(1000000)'
      },
      language: {
        type: Sequelize.STRING
      },
      entity_id: {
        type: Sequelize.STRING
      }
      
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('video_logos');
  }
};