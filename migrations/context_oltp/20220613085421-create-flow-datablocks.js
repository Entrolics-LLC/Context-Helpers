'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flow_datablocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      flow_name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      flow_json: {
        type: "CHARACTER VARYING(1048576)"
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      project_id: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flow_datablocks');
  }
};