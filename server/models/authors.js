const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myAuthors = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
})

module.exports = mongoose.model('Authors', myAuthors);