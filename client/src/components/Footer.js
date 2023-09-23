//react
import React from "react";

import { Link } from "react-router-dom";

//bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {
  Github,
  Linkedin,
  StackOverflow,
  TelephoneFill,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <>
      <Navbar
        id="mainNavbar"
        expand={true}
        fixed="bottom"
        data-bs-theme="dark"
        bg="dark"
        className="border-top border-secondary"
      >
        <Container>
          <Nav className="m-auto gap-2 gap-sm-5 align-items-center">
            <Nav.Link
              href="https://github.com/Yiladien"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="fs-3" />
            </Nav.Link>
            <Nav.Link
              href="www.linkedin.com/in/gabriel-cordova314"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="fs-3" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              title="gabecordova.dev"
              className="text-center"
            >
              <div>Gabe Cordova</div>
              <div>www.gabecordova.dev</div>
            </Nav.Link>
            <Nav.Link
              href="https://stackoverflow.com/users/18272025/gabriel-cordova"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StackOverflow className="fs-3" />
            </Nav.Link>
            <Nav.Link
              href="tel: 9492752831"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelephoneFill className="fs-3" />
            </Nav.Link>
          </Nav>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
