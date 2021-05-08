const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        id: ID,
        name: String,
        genre: String,
        author: Author,
    }

    type Author {
        id: ID,
        name: String,
        age: Int,
        books: [Book],
    }

    #TYPE ROOT

    type Query {
        books: [Book],
        book (id: ID!): Book,
        authors: [Author],
        author (id: ID!): Author,
    }

    type Mutation {
        createBook (name: String, genre: String, authorID: String) : Book,
        createAuthor (name: String, age: Int!) : Author,
    }
`;

module.exports = typeDefs;