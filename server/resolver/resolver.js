const { books, authors } = require('../data/static');
const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find((book) => book.id == args.id),
        authors: () => authors,
    },
    Mutation: {
        book: (parent, args) => args,
        author: (parent, args) => args,
    },
    Book: {
        author: (parent, args) => authors.find((author) => author.id == parent.authorID), 
    },
    Author: {
        books: (parent, args) => books.filter((book) => book.authorID == parent.id),     
    },

}

module.exports = resolvers;
