import React, {useState} from "react";
import { Card, Form } from 'react-bootstrap';

import { createSingleAuthor } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';
import { getAllAuthors } from "../../graphql/queries";

const AddAuthor = () => {

  const [addSingleAuthor, dataMutaiton] = useMutation(createSingleAuthor);
  const [dataChangeInputAuthor, setDataChangeAuthor] = useState({
    name: "",
    age: "",
  });

  const changeInputAuthor = (e) => {
    setDataChangeAuthor({
      ...dataChangeInputAuthor,
      [e.target.name]: e.target.value,
    });
  };
  const addAuthor = (e) => {
    e.preventDefault();
    const { name, age } = dataChangeInputAuthor;
    addSingleAuthor({
      variables: {
        name,
        age: parseInt(age),
      },
      refetchQueries: [{query: getAllAuthors}],
    });
    console.log(dataChangeInputAuthor);
    setDataChangeAuthor({
      name: "",
      age:""
    });
  };
  return (
    <Card className="add-data">
      <Card.Header>Add single author</Card.Header>
      <Card.Body>
        <Form onSubmit={addAuthor}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Add name author"
              className="visibility"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Add name author" name="name" value={dataChangeInputAuthor.name} onChange={changeInputAuthor} required />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Add age author" name="age" value={dataChangeInputAuthor.age} onChange={changeInputAuthor} required />
          </Form.Group>
          <button type="submit" class="btn btn-secondary">
            Add Single author
          </button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddAuthor;
