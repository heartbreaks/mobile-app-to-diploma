const Sequelize = require('sequelize')


module.exports = new Sequelize('railway', 'root', 'HEABD2G2Ed3d24dDCb-D1cgGD434Bb3e', {
    host: 'viaduct.proxy.rlwy.net',
    port: 38718,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialectOptions: {
        timeout: 60000, // Установите значение тайм-аута в миллисекундах
    }
})
/*
module.exports = new Sequelize('heroku_dbf3f42dc9689a9', 'b6fcff8f164fd6', '42c359d3', {
    host: 'eu-cdbr-west-01.cleardb.com',

    dialect: 'mysql'
})
*/