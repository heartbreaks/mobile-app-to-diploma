const { DataTypes } = require("sequelize");
const db = require("../databaseSettings");

const Tasks = db.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    executor: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    body: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    level_primary: { type: DataTypes.INTEGER },
    appointment_by: {type: DataTypes.INTEGER},
    ended: {type: DataTypes.INTEGER}
  },
  { timestamps: true }
);

module.exports = Tasks;
