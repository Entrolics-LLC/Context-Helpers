'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('additional_properties_lists', {
      property_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      options: {
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
    await queryInterface.dropTable('additional_properties_lists');
  }
};