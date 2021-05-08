import React from "react";
import { Row, Col} from 'react-bootstrap';
import AddBook from './AddBook';
import AddAuthor from './AddAuthor';
import "./addData.css";

const AddData = () => {

  return (
    <Row>
        <Col xs={8} className="p-0">
          <AddBook />
      </Col>
      <Col xs={4} className="p-0">
        <AddAuthor />
      </Col>
    </Row>
  );
};

export default AddData;
