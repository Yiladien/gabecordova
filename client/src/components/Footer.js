//react
import React from "react";

import { Link } from "react-router-dom";

//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
          <a
            href="https://github.com/Yiladien"
            target="_blank"
            rel="noopener noreferrer"
            class="link-secondary"
          >
            <Github className="fs-3 svg-button" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-cordova314"
            target="_blank"
            rel="noopener noreferrer"
            class="link-secondary"
          >
            <Linkedin className="fs-3 svg-button" />
          </a>
          <a
            href="/"
            title="gabecordova.dev"
            className="text-center link-secondary link-underline link-underline-opacity-0"
          >
            <div>Gabe Cordova</div>
            <div>www.gabecordova.dev</div>
          </a>
          <a
            href="https://stackoverflow.com/users/18272025/gabriel-cordova"
            target="_blank"
            rel="noopener noreferrer"
            class="link-secondary"
          >
            <StackOverflow className="fs-3 svg-button" />
          </a>
          <a
            href="tel: 9492752831"
            target="_blank"
            rel="noopener noreferrer"
            class="link-secondary"
          >
            <TelephoneFill className="fs-3 svg-button" />
          </a>
        </Container>
      </Navbar>
      {/* <Navbar
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
              <Github className="fs-3 svg-button" />
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
        </Container>
      </Navbar> */}
    </>
  );
}

export default Footer;
