'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RedactedParagraph extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    RedactedParagraph.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.STRING,
            file_name: DataTypes.STRING,
            redacted_paragraph: DataTypes.STRING(10000),
            total_findings:DataTypes.INTEGER,
            transformation_types:DataTypes.ARRAY(DataTypes.STRING),
            is_deleted:DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: 'redacted_paragraphs',
            schema: 'sentiment',
            createdAt: false,
            updatedAt: false
        });
    return RedactedParagraph;
};