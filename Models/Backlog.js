const { DataTypes } = require("sequelize");
const db = require("../databaseSettings");

const Backlog = db.define('backlog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: { type: DataTypes.STRING },
    body: { type: DataTypes.STRING},
    date: {type: DataTypes.DATE},
    level_primary: {type: DataTypes.INTEGER},
    appointment_by: { type: DataTypes.INTEGER }
    },
    {timestamps: false,  tableName: 'backlog'}
    )

module.exports = Backlog