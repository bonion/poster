const Sequelize = require('sequelize')

var Db = require('../utils/database')

class User {
    constructor() {
        this.User = Db.define('user', {
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            }
        })
    }

    createUser(user) {
        this.User.sync({force: true}).then(() => {
            this.User.create(user)
        })
    }

    authenticate(username, password) {
        
    }

    getAllUsers() {
        return this.User.findAll()
    }
}

module.exports = User
