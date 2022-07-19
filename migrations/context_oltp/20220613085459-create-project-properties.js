'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project_properties', {
      project_id: {
        type: Sequelize.STRING
      },
      additional_properties_id: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('project_properties');
  }
};