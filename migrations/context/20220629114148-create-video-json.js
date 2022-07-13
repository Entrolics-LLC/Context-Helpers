'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('video_jsons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      video_json: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, {
      schema: 'context'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('video_jsons');
  }
};