import React , { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getAllBooks } from '../../graphql/queries';
import { Row, Col, Card } from "react-bootstrap";
import './showBooks.css';

import DetailBook from '../DetailBook/DetailBook';

const ShowBooks = () => {
    const [detailBook, setDetailBook ] = useState(null);

    const { loading, error, data} = useQuery(getAllBooks);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>error...</div>;

    return (
        <Row>
            <Col xs={8} className="p-0">
                <Card className="show-books">
                    <Card.Header>List Books</Card.Header>
                    <Card.Body className="p-0 mt-4">
                        <ul className="books-list">
                            { data.books.map((book) => {
                                return <li key={book.id} onClick={setDetailBook.bind(this,book.id)}>{book.name}</li>;
                            })}
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
            <DetailBook detailBook = {detailBook}/> 
        </Row>
    )
}

export default ShowBooks;
