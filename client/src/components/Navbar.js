//react
import React from "react";

import { NavLink } from "react-router-dom";

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
        <Container className="justify-content-center">
          <Nav className="gap-2 gap-sm-5">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" activeClassName="active">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" exact className="p-1">
              <div className="position-relative mx-3">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <img
                    alt="gabecordova.dev logo"
                    src={`logo.svg`}
                    width="55"
                    height="55"
                    className="d-inline-block align-top svg-button"
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
            <Nav.Link as={NavLink} to="/resume" activeClassName="active">
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">
              Contact
            </Nav.Link>
          </Nav>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
