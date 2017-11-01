var express = require('express')
var app = express()

const UserModel = require('./app/models/User')

var user = new UserModel()

user.createUser({
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email@test.com',
    password: 'toto'
})

app.get('/', (req, res) => {
    users = user.getAllUsers().then((users) => {
        console.log(users[0])
        res.end()
    })
})

app.listen(8080, () => {
    console.log('Server listening on port 8080')
})
