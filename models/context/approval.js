'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Approvals extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Approvals.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        type: DataTypes.STRING,
        status: DataTypes.STRING,
        possible_status: DataTypes.STRING,
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        project_id: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'approval',
        schema: 'context',
        createdAt: false,
        updatedAt: false
    });
    return Approvals;
};