const Sequelize = require('sequelize')

module.exports = new Sequelize('diplom', 'mysql', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
})