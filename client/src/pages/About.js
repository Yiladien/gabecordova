import React from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProfilePic from "../assets/img/IMG_8284-transparent-10.png";

const About = () => {
  return (
    <>
      <Container
        className="about-card py-2 rounded mt-3"
        // style={{
        //   boxShadow: "inset 0px 0px 0px 1px white",
        // }}
      >
        <Card bg="secondary" text="white">
          <Card.Header
            //  className="bg-secondary"
            className="about-card-header"
          >
            {/* <div className="position-absolute top-50 end-0 translate-middle-y">
              <div className="round-bg overflow-hidden">
                <Image src={ProfilePic} />
              </div>
            </div> */}
            <Row className="align-items-center">
              <Col xs={"auto"} className="me-3">
                <div className="position-relative">
                  <div className="round-bg overflow-hidden position-relative"></div>
                  <div className="round-bg-img">
                    <Image src={ProfilePic} />
                  </div>
                </div>
              </Col>
              <Col>
                <h1>Gabe Cordova</h1>
                <h4>Full Stack Web Developer</h4>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body
          //  className="bg-dark"
          >
            <p>
              Welcome and thank you for showing interest in viewing my website
              portfolio. My name is Gabriel "Gabe" Cordova and I am a full stack
              web developer trained in a variety of web technologies. This
              website will showcase my creations and provide you a list of my
              skillsets. I am naturally curious and love to problem solve and
              learn. Keep visiting to see my portfolio grow and what new skills
              I will add.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit aut nemo ullam vitae maiores quaerat assumenda earum
              officiis soluta sint necessitatibus fuga impedit, cupiditate
              perferendis itaque quibusdam repellendus. Recusandae, nam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit aut nemo ullam vitae maiores quaerat assumenda earum
              officiis soluta sint necessitatibus fuga impedit, cupiditate
              perferendis itaque quibusdam repellendus. Recusandae, nam.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default About;
