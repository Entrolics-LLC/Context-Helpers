'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class my_second_dbt_model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  my_second_dbt_model.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    first_name: DataTypes.STRING,
    middle_initial: DataTypes.STRING,
    last_name: DataTypes.STRING,
    job_title: DataTypes.STRING,
    notification: DataTypes.INTEGER,
    address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    user_interest_id: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    status_id: DataTypes.STRING,
    role_id: DataTypes.STRING,
    password: DataTypes.STRING,
    auth_type: DataTypes.STRING,
    social_id: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    avatar: DataTypes.STRING,
    is_email_verified: DataTypes.BOOLEAN,
    token: DataTypes.STRING,
    access_token: DataTypes.STRING,
    role_name: DataTypes.STRING,
    is_approved: DataTypes.BOOLEAN,
    disabled: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'my_second_dbt_model',
    createdAt: false,
    updatedAt: false
  });
  return my_second_dbt_model;
};