/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import "./content.css";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Cards from "../cards/Cards.jsx";

function Content({ toggleTheme, background }) {
  return (
    <Container className="mt-4">
      <Row>
        <Col className="d-flex justify-content-between ">
          <SearchBar background={background} />
          <Filter toggleTheme={toggleTheme} background={background} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
