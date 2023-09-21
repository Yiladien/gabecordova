import React from "react";

//bootstrap
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container
        className="bg-dark py-2"
        style={{
          boxShadow: "inset 0px 0px 0px 1px white",
        }}
      >
        <h4 className="text-light">Full Stack Web Developer</h4>
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          odit, tenetur atque quasi sunt modi optio impedit fuga enim nesciunt
          reiciendis consectetur libero blanditiis non labore odio repellendus
          ad culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
          magnam dicta dolorum pariatur quasi doloribus, cumque voluptatem animi
          doloremque tenetur ex voluptates repellat consequatur laudantium
          consequuntur corrupti fugiat dolor ipsam.
        </p>
      </Container>
    </>
  );
};

export default About;
