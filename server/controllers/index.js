const Books = require('../models/books');
const Authors = require('../models/authors');

const controllers = {
    getAllBooks: async () => await Books.find(),
    getAllAuthors: async () => await Authors.find(),
    getBook: async (id) => await Books.findById(id),
    getAuthor: async (id) => await Authors.findById(id),
    getAuthorOfBook: async (id) => await Authors.findById(id),
    getBooksOfAuthor: async (authorID) => await Books.find({authorID}),
    createBook: async (args) => {
        const newBook = new Books(args);
        return newBook.save();
    },
    createAuthor: async (args) => {
        const newAuthor = new Authors(args);
        return newAuthor.save();
    }
}

module.exports = { controllers };