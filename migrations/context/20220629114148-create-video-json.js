'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('video_jsons', {
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      video_json: {
        type: Sequelize.STRING
      },
    }, {
      schema: 'context'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('video_jsons');
  }
};