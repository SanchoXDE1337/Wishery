const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    id:{
        type: String,
        required:true
    },
    comments: [{
        author: {
            type: String,
            required: true
        },
        authorID: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        date: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Comments', CommentSchema);