import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";

// pages imports
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// component imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Router>
      <div className="bg-dark min-vh-100 pt-5 pb-5">
        <Navbar />
        <div className="pt-4 pb-4">
          <Container
            fluid
            // style={{
            //   boxShadow: "inset 0px 0px 0px 1px red",
            // }}
          >
            <Row className="justify-content-center">
              <Col xxl={6} lg={8} md={10} sm={12}>
                <Routes>
                  <Route exact path="/" element={<About />} />
                  <Route exact path="/portfolio" element={<Portfolio />} />
                  <Route exact path="/resume" element={<Resume />} />
                  <Route exact path="/contact" element={<Contact />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
