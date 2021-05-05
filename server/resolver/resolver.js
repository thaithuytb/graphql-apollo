const resolvers = {
    Query: {
        books: (parent, args , context) => context.getAllBooks(),
        book: (parent, args, { getBook } ) => getBook(args.id),
        authors: (parent, args , { getAllAuthors }) => getAllAuthors(),
        author: (parent, args, { getAuthor } ) => getAuthor(args.id),
    },
    Mutation: {
        createBook: async (parent, args, { createBook }) => await createBook(args),
        createAuthor: async (parent, args, { createAuthor }) => await createAuthor(args),
    },
    Book: {
        author: async (parent, args, context) => await context.getAuthorOfBook(parent.authorID)  
    },
    Author: {
        books: async (parent, args, { getBooksOfAuthor }) => await getBooksOfAuthor(parent.id),
    },
}

module.exports = resolvers;
