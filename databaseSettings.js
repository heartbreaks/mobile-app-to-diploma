const Sequelize = require('sequelize')


module.exports = new Sequelize('heroku_d60c203efce6810', 'mysql', 'mysql', {
    host: 'localhost',
    dialect: 'mysql',
})
/*
module.exports = new Sequelize('heroku_dbf3f42dc9689a9', 'b6fcff8f164fd6', '42c359d3', {
    host: 'eu-cdbr-west-01.cleardb.com',

    dialect: 'mysql'
})
*/