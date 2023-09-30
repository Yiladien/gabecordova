import React from "react";

//bootstrap
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// bootstrap icons
import { TelephoneFill } from "react-bootstrap-icons";

// component(s)
import EmailForm from "../components/EmailForm";
import TextRotation from "../components/TextRotation";

const Contact = () => {
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
              <h2 className="mb-3">
                Let's{" "}
                <TextRotation
                  // required prop: textList as []
                  // optional props: inType, outType, inDuration, outDuration, intervalTime
                  textList={[
                    "Connect",
                    "Chat",
                    "Code",
                    "Build",
                    "Innovate",
                    "Create",
                  ]}
                  // in types: rotateInY, rotateInX, rotateInZ, jelloIn, slideInLeft, slideInRight, slideInUp, slideInDown
                  // out types: rotateOutY, rotateOutX, rotateOutZ, jelloOut, slideOutLeft, slideOutRight, slideOutUp, slideOutDown
                  inType="slideInDown"
                  outType="slideOutRight"
                />
              </h2>
              <h4>
                <TelephoneFill /> Call Me
              </h4>
              <a
                href="tel:9492752831"
                className="link-light link-underline-opacity-50 link-underline-opacity-75-hover"
              >{`(949)275-2831`}</a>
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
