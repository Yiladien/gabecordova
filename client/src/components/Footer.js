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
  EnvelopeFill,
} from "react-bootstrap-icons";

function Footer() {
  const email = "gcordova9918@gmail.com";
  const subject = "Hello";
  const body = "Hi there!";

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
        <Container className="justify-content-center">
          <Nav className="gap-4 gap-sm-5 align-items-center">
            <a
              href="https://github.com/Yiladien"
              target="_blank"
              rel="noopener noreferrer"
              class="link-secondary mx-2"
              title="Github"
            >
              <Github className="fs-3 svg-button" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-cordova314"
              target="_blank"
              rel="noopener noreferrer"
              class="link-secondary mx-2"
              title="LinkedIn"
            >
              <Linkedin className="fs-3 svg-button" />
            </a>
            <a
              href="/"
              title="gabecordova.dev"
              className="text-center link-secondary link-underline link-underline-opacity-0 mx-0 mx-sm-2"
            >
              <div>Gabe Cordova</div>
              <div>www.gabecordova.dev</div>
            </a>
            <a
              href="https://stackoverflow.com/users/18272025/gabriel-cordova"
              target="_blank"
              rel="noopener noreferrer"
              class="link-secondary mx-2"
              title="StackOverflow"
            >
              <StackOverflow className="fs-3 svg-button" />
            </a>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`}
              class="link-secondary mx-2"
              title="Email Me"
            >
              <EnvelopeFill className="fs-3 svg-button" />
            </a>
          </Nav>
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
