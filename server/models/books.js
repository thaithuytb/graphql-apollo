const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myBooks = new Schema({
    name: {
        type: String,
    },
    genre: {
        type: String,
    },
    authorID: {
        type: String,
    }
})

module.exports = mongoose.model('Books', myBooks);