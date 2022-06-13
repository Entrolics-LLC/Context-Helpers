'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('form_templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      form_name: {
        type: Sequelize.STRING
      },
      form_url: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      user_id: {
        type: Sequelize.STRING
      },
      form_size: {
        type: Sequelize.STRING
      },
      original_form_name: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('form_templates');
  }
};