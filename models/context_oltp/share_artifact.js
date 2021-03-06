'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class share_artifact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  share_artifact.init({
    artifact_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    share_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'share_artifact',
    createdAt: false,
    updatedAt: false
  });
  return share_artifact;
};