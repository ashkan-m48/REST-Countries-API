/* eslint-disable react/prop-types */
// import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

function Header({ toggleTheme, background }) {
  return (
    <div>
      <Navbar
        className="mainNavbar"
        data-bs-theme={background ? "light" : "dark"}
        bg={background ? "light" : "dark"}
      >
        <Container>
          <Navbar.Brand className="titleOfNavbar">
            Where in the world?
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end align-items-center">
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "150px",
                backgroundColor: "transparent",
                border: "none",
                position: "relative",
              }}
              onClick={toggleTheme}
            >
              <i className={background ? "bi bi-moon" : "bi bi-moon-fill"}></i>
              <p style={{ marginTop: 15, marginLeft: 10 }}>Dark Mode</p>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
