const Sequelize = require('sequelize')

module.exports = new Sequelize('heroku_d60c203efce6810', 'mysql', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
})