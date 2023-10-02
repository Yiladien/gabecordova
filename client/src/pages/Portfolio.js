import React from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//carousel images
import * as projectImages from "../assets/img/portfolio-projects-slides";

const Portfolio = () => {
  const projectSlides = Object.values(projectImages);

  return (
    <>
      <Container className="bg-dark py-2">
        <Row className="mb-3">
          <Col>
            <h4 className="text-light">Recent Projects</h4>

            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={projectSlides[0]} />

                <Carousel.Caption>
                  <h3>Watch Time</h3>
                  <p>Build your movie bucket list</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={projectSlides[1]} />

                <Carousel.Caption>
                  <h3>Time 2 Work</h3>
                  <p>Quick and easy time and payroll tracker</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={projectSlides[2]} />

                <Carousel.Caption>
                  <h3>Cyber Jam Trivia</h3>
                  <p>Online trivia game.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="text-light">List of Tech</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
