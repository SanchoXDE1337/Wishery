const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    authorID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Posts', PostSchema);