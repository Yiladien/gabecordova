//react
import React from "react";

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
          <Nav className="m-auto column-gap-3">
            <Nav.Link href="/">
              <Github />
            </Nav.Link>
            <Nav.Link href="/projects">
              <Linkedin />
            </Nav.Link>
            <Nav.Link href="/" title="gabecordova.dev">
              <span>Gabe Cordova</span>
            </Nav.Link>
            <Nav.Link href="/resume">
              <StackOverflow />
            </Nav.Link>
            <Nav.Link href="/contact">
              <TelephoneFill />
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
