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
        expand={true}
        fixed="top"
        data-bs-theme="dark"
        bg="dark"
        className="border-bottom border-secondary py-3"
      >
        <Container>
          <Nav className="m-auto column-gap-3">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/" className="p-1">
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <img
                    alt="gabecordova.dev logo"
                    src={`logo.svg`}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    title="gabecordova.dev"
                  />
                </div>
                <img
                  alt=""
                  src={`logo.svg`}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </div>
              {/* <span>Gabe Cordova</span> */}
            </Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
