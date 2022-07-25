'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('schema_form_key_pairs', {
      file_name: {
        type: Sequelize.STRING
      },
      field_name: {
        type: Sequelize.STRING
      },
      field_value: {
        type: Sequelize.STRING
      },
      time_stamp: {
        type: Sequelize.STRING
      },
      validated_field_name: {
        type: Sequelize.STRING
      },
      validated_field_value: {
        type: Sequelize.STRING
      },
      updated_date: {
        type: Sequelize.DATE
      },
      confidence: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      key_x1: {
        type: Sequelize.FLOAT
      },
      key_x2: {
        type: Sequelize.FLOAT
      },
      key_y1: {
        type: Sequelize.FLOAT
      },
      key_y2: {
        type: Sequelize.FLOAT
      },
      value_x1: {
        type: Sequelize.FLOAT
      },
      value_x2: {
        type: Sequelize.FLOAT
      },
      value_y1: {
        type: Sequelize.FLOAT
      },
      value_y2: {
        type: Sequelize.FLOAT
      },
      page_number: {
        type: Sequelize.INTEGER
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      field_name_confidence: {
        type: Sequelize.STRING
      },
      field_value_confidence: {
        type: Sequelize.STRING
      },
      dlp_info_type: {
        type: Sequelize.STRING
      },
      dlp_match_likelihood: {
        type: Sequelize.STRING
      },
      nullable: {
        type: Sequelize.BOOLEAN
      },
      data_types: {
        type: Sequelize.STRING
      },
      column_name: {
        type: Sequelize.STRING
      },
      width: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      w: {
        type: Sequelize.FLOAT
      },
      h: {
        type: Sequelize.FLOAT
      },
      name_width: {
        type: Sequelize.FLOAT
      },
      name_height: {
        type: Sequelize.FLOAT
      },
      value_width: {
        type: Sequelize.FLOAT
      },
      value_height: {
        type: Sequelize.FLOAT
      }
    }, {
      schema: 'context'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('schema_form_key_pairs');
  }
};