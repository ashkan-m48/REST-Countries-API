import Form from "react-bootstrap/Form";
import { Col, Container } from "react-bootstrap";
import "./searchBar.css";

function SearchBar({ toggleTheme, background }) {
  return (
    <Container className="mb-3">
      <Col style={{ maxWidth: 350 }}>
        <Form.Control
          type="text"
          placeholder="Search for a country"
          className=" mr-sm-2"
        />
      </Col>
    </Container>
  );
}

export default SearchBar;
