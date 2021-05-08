import { gql } from '@apollo/client';

const createSingleBook = gql`
    mutation createSingleBook($name: String, $genre: String, $authorID: String!) {
        createBook( name: $name, genre: $genre, authorID: $authorID) {
            id
            name
        }
    }
`;
const createSingleAuthor = gql`
    mutation createSingleAuthor($name: String!, $age: Int! ) {
        createAuthor( name: $name, age: $age ) {
            id
            name
        }
    }
`;

export { createSingleBook, createSingleAuthor};