//react
import React, { useRef, useState, useLayoutEffect } from "react";

import { NavLink } from "react-router-dom";

//bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function MainNavbar() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const navbarToggleRef = useRef(null);

  useLayoutEffect(() => {
    const checkNavbarToggle = () => {
      if (navbarToggleRef.current) {
        const toggleDisplay = window.getComputedStyle(
          navbarToggleRef.current
        ).display;
        if (toggleDisplay === "none") {
          setNavbarCollapsed(false);
        } else {
          setNavbarCollapsed(true);
        }
      } else {
        console.log(false);
      }
    };

    // Initial check
    checkNavbarToggle();

    // Listen for resize events
    window.addEventListener("resize", checkNavbarToggle);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkNavbarToggle);
    };
  }, []);

  return (
    <>
      <Navbar
        id="mainNavbar"
        // expand={true}
        expand={"sm"}
        fixed="top"
        data-bs-theme="dark"
        bg="dark"
        className="border-bottom border-secondary py-3"
      >
        <Container
          className={
            navbarCollapsed
              ? "justify-content-between"
              : "justify-content-center"
          }
        >
          {navbarCollapsed ? (
            <Navbar.Brand>
              <Nav.Link as={NavLink} to="/" className="p-1">
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
              </Nav.Link>
            </Navbar.Brand>
          ) : null}
          <Navbar.Toggle ref={navbarToggleRef} />
          {navbarCollapsed ? (
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <Navbar.Brand>
                    <Nav.Link as={NavLink} to="/" className="p-1">
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
                    </Nav.Link>
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={NavLink} to="/" activeClassName="active">
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/portfolio"
                    activeClassName="active"
                  >
                    Portfolio
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/resume" activeClassName="active">
                    Resume
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact" activeClassName="active">
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          ) : null}
          {!navbarCollapsed ? (
            <Nav className="gap-2 gap-sm-5">
              <Nav.Link as={NavLink} to="/" activeClassName="active">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" activeClassName="active">
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" className="p-1">
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
              </Nav.Link>
              <Nav.Link as={NavLink} to="/resume" activeClassName="active">
                Resume
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" activeClassName="active">
                Contact
              </Nav.Link>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
