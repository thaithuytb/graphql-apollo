import React , {useState} from "react";
import { Card, Form } from 'react-bootstrap';
import { getAllAuthors, getAllBooks } from '../../graphql/queries';
import { createSingleBook } from '../../graphql/mutations';
import { useQuery, useMutation } from '@apollo/client';

const AddBook = () => {
  const { loading, error, data } = useQuery(getAllAuthors);
  const [createBook] = useMutation(createSingleBook);

  const [dataChangeInputBook, setDataChangeBook] = useState({
    name: "",
    genre: "",
    authorID: "",
  });

  const changeInputBook = (e) => {
    setDataChangeBook({
      ...dataChangeInputBook,
      [e.target.name]: e.target.value,
    });
  };
  const addBook = (e) => {
    e.preventDefault();
    const { name, genre, authorID } = dataChangeInputBook;
    //add data in database and refetchQueries addAllBooks to updata data
    createBook({
      variables: {
        name,
        genre,
        authorID,
      },
      refetchQueries: [{ query: getAllBooks }],
    });
    setDataChangeBook({
      name: "",
      genre: "",
      authorID: "",
    });
  };
  return (
    <Card className="add-data">
      <Card.Header>Add single book</Card.Header>
      <Card.Body>
        <Form onSubmit={addBook}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="add book"
              name="name"
              value={dataChangeInputBook.name}
              onChange={changeInputBook}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="add genre"
              name="genre"
              value={dataChangeInputBook.genre}
              onChange={changeInputBook}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              onChange={changeInputBook}
              name="authorID"
              value={dataChangeInputBook.authorID}
              required
            >
              <option value="">Select authors</option>

              {loading || error ? (
                <div>Loading or error...</div>
              ) : (
                <>
                  {data.authors.map((author) => (
                    <option key={author.id} value={author.id}>
                      {author.name}
                    </option>
                  ))}
                </>
              )}
            </Form.Control>
          </Form.Group>
          <button type="submit" class="btn btn-secondary">
            Add Single book
          </button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddBook;
