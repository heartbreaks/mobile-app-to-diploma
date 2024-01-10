const { DataTypes } = require("sequelize");
const db = require("../databaseSettings");

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    login: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    role: { type: DataTypes.INTEGER },
    position: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

module.exports = User;
