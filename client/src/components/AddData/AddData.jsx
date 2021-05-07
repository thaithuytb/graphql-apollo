import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./addData.css";
const AddData = () => {
  return (
    <Row>
      <Col xs={8} className="p-0">
        <Card className="add-data">
          <Card.Header>Add single book</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="add book" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="add genre" />
              </Form.Group>
              <Form.Group>
                <Form.Control as="select">
                  <option disabled>Select authors</option>
                  <option value="To hoai">To Hoai</option>
                  <option value="Ngo Tat To">Ngo Tat To</option>
                </Form.Control>
              </Form.Group>
              <button type="button" class="btn btn-secondary">
                Add Single book
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={4} className="p-0">
        <Card className="add-data">
          <Card.Header>Add single author</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Add name author" className="visibility"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Add name author" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Add age author" />
              </Form.Group>
              <button type="button" class="btn btn-secondary">
                Add Single author
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddData;
