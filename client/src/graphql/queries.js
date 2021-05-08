import { gql } from "@apollo/client";

const getAllBooks = gql`
  query getAllBooks {
      books {
        id
        name
      } 
  }
`;

const getAllAuthors = gql`
  query getAllAuthors {
    authors {
      id
      name
    }
  }
`;

const getDetailBook = gql`
  query getDetailBook($id: ID!) {
    book (id: $id) {
      id 
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export { getAllBooks, getDetailBook, getAllAuthors };
