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
        id="footer-nav"
        expand={true}
        //
        // opted to use css media query to change fixed to relative footer dynamically
        // fixed="bottom"
        //
        data-bs-theme="dark"
        bg="dark"
        className="border-top border-secondary"
      >
        <Container className="justify-content-center">
          <Nav className="align-items-center flex-column flex-sm-row">
            <a
              href="/"
              title="gabecordova.dev"
              className="text-center link-secondary link-underline link-underline-opacity-0 d-sm-none focus-ring"
            >
              <h2>
                <b>Gabe Cordova</b>
              </h2>
              <div>www.gabecordova.dev</div>
            </a>
            <a
              href="https://github.com/Yiladien"
              target="_blank"
              rel="noopener noreferrer"
              className="link-secondary mx-2 focus-ring"
              title="Github"
            >
              <Github className="svg-button" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-cordova314"
              target="_blank"
              rel="noopener noreferrer"
              className="link-secondary mx-2 focus-ring"
              title="LinkedIn"
            >
              <Linkedin className="svg-button" />
            </a>
            <a
              href="/"
              title="gabecordova.dev"
              className="text-center link-secondary link-underline link-underline-opacity-0 mx-0 mx-sm-2 d-none d-sm-block focus-ring"
            >
              <div>
                <b>Gabe Cordova</b>
              </div>
              <div>www.gabecordova.dev</div>
            </a>
            <a
              href="https://stackoverflow.com/users/18272025/gabriel-cordova"
              target="_blank"
              rel="noopener noreferrer"
              className="link-secondary mx-2 focus-ring"
              title="StackOverflow"
            >
              <StackOverflow className="svg-button" />
            </a>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`}
              className="link-secondary mx-2 focus-ring"
              title="Email Me"
            >
              <EnvelopeFill className="svg-button" />
            </a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
