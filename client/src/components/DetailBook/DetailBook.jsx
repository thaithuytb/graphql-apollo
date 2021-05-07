import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { getDetailBook } from "../../graphql/queries";

const DetailsBook = ({ detailBook }) => {
  const { loading, error, data } = useQuery(getDetailBook, {
    variables: {
      id: detailBook,
    },
    skip: detailBook === null,
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  const book = detailBook!==null ? data.book : null;
  const books = book !== null ? book.author.books :null;
  return (
    <Col xs={4} className="p-0 row-show-data ">
      <Card className="show-books">
        <Card.Header className="text-center">Show details</Card.Header>

        {book == null ? (
          <p className="select-book">Select any book</p>
        ) : (
          <>
            <Card.Body className="pl-3">
              <p>Name Book: {book.name}</p>
              <p>Genre: {book.genre}</p>
              <p>Author: {book.author.name}</p>
              <p>age: {book.author.age}</p>
              <p>Cac tac pham tieu bieu: </p>
              <ul>
                {books.map((book) => (
                  <li key={book.id}>{book.name}</li>
                ))}
              </ul>
            </Card.Body>
          </>
        )}
      </Card>
    </Col>
  );
};

export default DetailsBook;
