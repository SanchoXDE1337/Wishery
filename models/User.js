const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', UserSchema)