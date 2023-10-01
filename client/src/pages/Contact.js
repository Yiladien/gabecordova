import React from "react";

//bootstrap
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// bootstrap icons
import {
  TelephoneFill,
  EnvelopeFill,
  Linkedin,
  Github,
} from "react-bootstrap-icons";

// component(s)
import EmailForm from "../components/EmailForm";
import TextRotation from "../components/TextRotation";

const Contact = () => {
  const introWordList = [
    "Connect",
    "Chat",
    "Code",
    "Build",
    "Innovate",
    "Create",
  ];

  return (
    <>
      <Container
        className="py-2 mt-2"
        // style={{
        //   boxShadow: "inset 0px 0px 0px 1px white",
        // }}
      >
        <Row>
          <Col xs={12} sm={6} className="mb-3">
            <div className="text-light mb-2">
              <h1 className="mb-3">
                Let's{" "}
                <TextRotation
                  // required prop: textList as []
                  // optional props: inType, outType, inDuration, outDuration, intervalTime
                  textList={introWordList}
                  // in types: rotateInY, rotateInX, rotateInZ, jelloIn, slideInLeft, slideInRight, slideInUp, slideInDown
                  // out types: rotateOutY, rotateOutX, rotateOutZ, jelloOut, slideOutLeft, slideOutRight, slideOutUp, slideOutDown
                  inType="slideInDown"
                  outType="slideOutRight"
                />
              </h1>
              <div className="border-start border-light border-5 ps-1 mb-3">
                <div className="bg-secondary p-2 rounded">
                  <h4>
                    <TelephoneFill className="pb-1" /> Call Me
                  </h4>
                  <a
                    href="tel:9492752831"
                    className="link-light link-underline-opacity-50 link-underline-opacity-75-hover focus-ring"
                  >{`(949)275-2831`}</a>
                </div>
              </div>

              <div className="border-start border-light border-5 ps-2 mb-3">
                <div className="bg-secondary p-2 rounded">
                  <h4>
                    <EnvelopeFill className="pb-1" /> Email Me
                  </h4>
                  <a
                    href="mailto:gcordova9918@gmail.com"
                    className="link-light link-underline-opacity-50 link-underline-opacity-75-hover focus-ring"
                  >{`gcordova9918@gmail.com`}</a>
                </div>
              </div>

              <div className="border-start border-light border-5 ps-2 mb-3">
                <div className="bg-secondary p-2 rounded">
                  <h4>
                    <Linkedin className="pb-1" /> Message Me
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/gabriel-cordova314"
                    className="link-light link-underline-opacity-50 link-underline-opacity-75-hover focus-ring"
                  >{`www.linkedin.com/in/gabriel-cordova314`}</a>
                </div>
              </div>

              <div className="border-start border-light border-5 ps-2 mb-3">
                <div className="bg-secondary p-2 rounded">
                  <h4>
                    <Github className="pb-1" /> Follow Me
                  </h4>
                  <a
                    href="https://github.com/Yiladien"
                    className="link-light link-underline-opacity-50 link-underline-opacity-75-hover focus-ring"
                  >{`https://github.com/Yiladien`}</a>
                </div>
              </div>
              {/* <a
                href="mailto:gcordova9918@gmail.com"
                className="link-light link-underline-opacity-50 link-underline-opacity-75-hover"
              >{`gcordova9918@gmail.com`}</a> */}
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <EmailForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
