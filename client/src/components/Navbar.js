//react
import React from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainNavbar() {
  return (
    <>
      <Navbar
        id="mainNavbar"
        expand="md"
        sticky="top"
        variant="dark"
        bg="dark"
        className="border-bottom border-secondary mb-2"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={`./logo.svg`}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            <span>Gabe Cordova</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto column-gap-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Projects</Nav.Link>
              <Nav.Link href="/">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
