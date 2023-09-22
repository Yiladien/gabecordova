import React from "react";

//bootstrap
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container
        className="bg-dark py-2"
        // style={{
        //   boxShadow: "inset 0px 0px 0px 1px white",
        // }}
      >
        <h1 className="text-light">Gabe Cordova</h1>
        <h4 className="text-light">Full Stack Web Developer</h4>
        <p className="text-light">
          Welcome and thank you for showing interest in viewing my website
          portfolio. My name is Gabriel "Gabe" Cordova and I am a full stack web
          developer trained in a variety of web technologies. This website will
          showcase my creations and provide you a list of my skillsets. I am
          naturally curious and love to problem solve and learn. Keep visiting
          to see my portfolio grow and what new skills I will add.
        </p>
        <p className="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          aut nemo ullam vitae maiores quaerat assumenda earum officiis soluta
          sint necessitatibus fuga impedit, cupiditate perferendis itaque
          quibusdam repellendus. Recusandae, nam.
        </p>
        <p className="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          aut nemo ullam vitae maiores quaerat assumenda earum officiis soluta
          sint necessitatibus fuga impedit, cupiditate perferendis itaque
          quibusdam repellendus. Recusandae, nam.
        </p>
      </Container>
    </>
  );
};

export default About;
