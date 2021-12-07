import React from "react";
import "./Navbar.scss";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
  Button,
} from "react-bootstrap";
function Navbar2() {
  return (
    <div id="navbar" className="container">
      <div className="navbar-list">
        <div className="navbar-logo">
          <a href="/"><img src="/assets/logo_mainstack.svg" alt="" /></a>
        </div>
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-btns">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Create Free Account</button>
      </div>
      <Navbar  expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
              <div className="navbar-logo">
          <a href="/"><img src="/assets/logo_mainstack.svg" alt="" /></a>
        </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 text-dark">
                <Nav.Link className="text-dark" href="#action1">Pricing</Nav.Link>
                <Nav.Link className="text-dark" href="#action2">Blog</Nav.Link>
                <Nav.Link className="text-dark" href="#action2">About Us</Nav.Link>
                <Nav.Link className="text-dark" href="#action2">Contact Us</Nav.Link>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;
