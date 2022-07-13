'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roles.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    role_name: DataTypes.STRING,
    home_access: DataTypes.INTEGER,
    data_access: DataTypes.INTEGER,
    admin_access: DataTypes.INTEGER,
    report_access: DataTypes.INTEGER,
    upload_access: DataTypes.INTEGER,
    doc_approval_access: DataTypes.INTEGER,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'roles',
    createdAt: false,
    updatedAt: false
  });
  return roles;
};