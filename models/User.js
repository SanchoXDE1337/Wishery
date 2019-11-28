const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    info: {
        imgUrl: String,
        age: Number,
        contacts: {
            vk: String,
            instagram: String,
            telegram: String
        }
    },
})

module.exports = mongoose.model('Users', UserSchema)