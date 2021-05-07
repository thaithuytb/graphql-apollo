import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import AddData from './components/AddData/AddData';
import ShowBooks from './components/ShowBooks/ShowBooks';

const client = new ApolloClient({
  uri: "http://localhost:4005/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Container className="App">
        <Row>
          <Col className="bg-dark p-2">
            <h3>Thái Ngô</h3>
          </Col>
        </Row>
        <AddData />
        <ShowBooks />
      </Container>
    </ApolloProvider>
  );
}

export default App;
