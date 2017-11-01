const Sequelize = require('sequelize')
const config = require('../../config')

const sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

sequelize.authenticate().then(() => {
    console.log('The connection has been established successfully')
}).catch((err) => {
    console.log('Error while connecting: ', err)
})

module.exports = sequelize
