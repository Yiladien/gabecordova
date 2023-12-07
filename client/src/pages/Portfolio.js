import React, { useState } from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import Collapse from "react-bootstrap/Collapse";
import Stack from "react-bootstrap/Stack";

// bootstrap icons
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";

//carousel images
import * as projectImages from "../assets/img/portfolio-projects-slides";

const Portfolio = () => {
  const [captionOpen, setCaptionOpen] = useState(false);
  const [captionTimeout, setCaptionTimeout] = useState(null);
  const [wasTouched, setWasTouched] = useState(false);
  const [carouselMouseEnter, setCarouselMouseEnter] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);

  // const [mouseEnter, setMouseEnter] = useState(false);

  const projectSlides = Object.values(projectImages);

  // const projectArr = [
  //   {
  //     name: "Password Generator",
  //     technology: [
  //       {
  //         theme: "Code",
  //         app: "HTML",
  //       },
  //       {
  //         theme: "Code",
  //         app: "CSS",
  //       },
  //       {
  //         theme: "Code",
  //         app: "Javascript",
  //       },
  //     ],
  //     ghLink: "https://github.com/Yiladien/Password_Generator",
  //     application: "https://yiladien.github.io/Password_Generator/",
  //     image: "0.jpg",
  //   },
  //   {
  //     name: "E-commerce Backend",
  //     technology: [
  //       {
  //         theme: "Db",
  //         app: "MySQL",
  //       },
  //       {
  //         theme: "Node",
  //         app: "Sequelize",
  //       },
  //       {
  //         theme: "Process",
  //         app: "REST API",
  //       },
  //       {
  //         theme: "Code",
  //         app: "Javascript",
  //       },
  //     ],
  //     ghLink: "https://github.com/Yiladien/e-commerce-backend",
  //     application: "",
  //     image: "1.jpg",
  //   },
  //   {
  //     name: "README Generator",
  //     technology: [
  //       {
  //         theme: "Node",
  //         app: "Inquirer",
  //       },
  //       {
  //         theme: "Code",
  //         app: "Javascript",
  //       },
  //     ],
  //     ghLink: "https://github.com/Yiladien/readme-generator",
  //     application: "",
  //     image: "2.jpg",
  //   },
  //   {
  //     name: "Team Profile Generator",
  //     technology: [
  //       {
  //         theme: "Node",
  //         app: "Inquirer",
  //       },
  //       {
  //         theme: "Node",
  //         app: "Jest",
  //       },
  //       {
  //         theme: "Code",
  //         app: "Javascript",
  //       },
  //     ],
  //     ghLink: "https://github.com/Yiladien/team-profile-generator",
  //     application: "",
  //     image: "3.jpg",
  //   },
  //   {
  //     name: "Cyber Jam Trivia",
  //     technology: [
  //       {
  //         theme: "Framework",
  //         app: "Bulma",
  //       },
  //       {
  //         theme: "Code",
  //         app: "HTML",
  //       },
  //       {
  //         theme: "Code",
  //         app: "CSS",
  //       },
  //       {
  //         theme: "Code",
  //         app: "Javascript",
  //       },
  //     ],
  //     ghLink: "https://github.com/ConnieMarie/cyber-jam-trivia",
  //     application: "https://conniemarie.github.io/trivia/",
  //     image: "4.jpg",
  //   },
  //   {
  //     name: "Just Another Text Editor",
  //     technology: [
  //       {
  //         theme: "Process",
  //         app: "PWA",
  //       },
  //       {
  //         theme: "Node",
  //         app: "Express",
  //       },
  //       {
  //         theme: "Node",
  //         app: "babel",
  //       },
  //       {
  //         theme: "Node",
  //         app: "webpack",
  //       },
  //       {
  //         theme: "Node",
  //         app: "workbox",
  //       },
  //       {
  //         theme: "Db",
  //         app: "IndexedDb",
  //       },
  //     ],
  //     ghLink: "https://github.com/Yiladien/text-editor-pwa",
  //     application: "https://fast-garden-84807.herokuapp.com/",
  //     image: "5.jpg",
  //   },
  //   {
  //     name: "Time 2 Work",
  //     technology: [
  //       {
  //         theme: "Code",
  //         app: "HTML",
  //       },
  //       {
  //         theme: "Code",
  //         app: "CSS",
  //       },
  //       {
  //         theme: "Code",
  //         app: "Javascript",
  //       },
  //       {
  //         theme: "Framework",
  //         app: "Bulma",
  //       },
  //       {
  //         theme: "Node",
  //         app: "Handlebars",
  //       },
  //       {
  //         theme: "Node",
  //         app: "Sequelize",
  //       },
  //       {
  //         theme: "Db",
  //         app: "MySQL",
  //       },
  //     ],
  //     ghLink: "https://github.com/bsolis6878/time-2-work",
  //     application: "https://protected-taiga-76694.herokuapp.com/",
  //     image: "6.jpg",
  //   },
  //   {
  //     name: "Social Media API",
  //     technology: [
  //       {
  //         theme: "Db",
  //         app: "Mongoose",
  //       },
  //       {
  //         theme: "Node",
  //         app: "MongoDB",
  //       },
  //       {
  //         theme: "Process",
  //         app: "REST API",
  //       },
  //       {
  //         theme: "Code",
  //         app: "Javascript",
  //       },
  //     ],
  //     ghLink: "https://github.com/Yiladien/social-network-API",
  //     image: "7.jpg",
  //   },
  //   {
  //     name: "WATCHTIME",
  //     technology: [
  //       {
  //         theme: "Db",
  //         app: "Mongoose",
  //       },
  //       {
  //         theme: "Db",
  //         app: "GraphQL",
  //       },
  //       {
  //         theme: "Node",
  //         app: "MongoDB",
  //       },
  //       {
  //         theme: "Process",
  //         app: "MERN",
  //       },
  //       {
  //         theme: "Code",
  //         app: "REACT",
  //       },
  //       {
  //         theme: "Framework",
  //         app: "REACT Bootstrap",
  //       },
  //     ],
  //     ghLink: "https://github.com/JaredLove/Watch--Time",
  //     image: "8.jpg",
  //   },
  // ];

  const handleCarouselMouseEnter = () => {
    console.log("carousel enter");
    setCarouselMouseEnter(true);
  };

  const handleCarouselMouseLeave = () => {
    console.log("carousel leave");
    if (wasTouched) return;

    setCarouselMouseEnter(false);
    setWasClicked(false);
    const timeoutId = setTimeout(() => {
      setCaptionOpen(false);
    }, 3000);

    setCaptionTimeout(timeoutId);
  };

  const handleCaptionMouseEnter = () => {
    console.log("caption enter");
    if (wasTouched) return;
    if (wasClicked) return;
    if (captionTimeout) clearTimeout(captionTimeout);
    setCaptionOpen(true);
  };

  const handleCaptionMouseLeave = () => {
    console.log("caption leave");

    if (carouselMouseEnter) return;
    if (wasTouched) return;
    if (wasClicked) return;

    const timeoutId = setTimeout(() => {
      setCaptionOpen(false);
    }, 3000);

    setCaptionTimeout(timeoutId);
  };

  const handleClick = () => {
    console.log("caption click - ", !captionOpen);
    setCaptionOpen(!captionOpen);
    setWasClicked(true);
    // Handle the click event
  };

  const handleCaptionTouchStart = () => {
    console.log("caption touch start");
    setWasTouched(true);
  };

  const handleCaptionTouchEnd = () => {
    console.log("caption touch end");
    // Your touch-specific logic here (if any)

    // Reset the wasTouched flag after a short delay to allow for synthesized mouse events to occur
    setTimeout(() => {
      setWasTouched(false);
    }, 300);
  };

  return (
    <>
      <Container className="bg-dark py-2">
        <Row className="justify-content-center mb-3">
          <Col lg={8}>
            <h4 className="text-light">Recent Projects</h4>

            <Carousel
              interval={80000}
              //  indicators={false}
              onMouseEnter={handleCarouselMouseEnter}
              onMouseLeave={handleCarouselMouseLeave}
            >
              {projectSlides.map((slide, i) => (
                <Carousel.Item
                  key={i}
                  onClick={handleClick}
                  onMouseEnter={handleCaptionMouseEnter}
                  onMouseLeave={handleCaptionMouseLeave}
                  onTouchStart={handleCaptionTouchStart}
                  onTouchEnd={handleCaptionTouchEnd}
                >
                  <Ratio aspectRatio="16x9">
                    <div className="overflow-hidden">
                      <img
                        className="d-block w-100"
                        src={slide.src}
                        alt={slide.title}
                      />
                    </div>
                  </Ratio>

                  <Carousel.Caption>
                    <Stack gap={1}>
                      <h3 className="p-0 m-0 display-6">{slide.title}</h3>
                      <div className="p-0 fst-italic">{slide.caption}</div>
                      <div className="p-0">{slide.tech.join(" | ")}</div>
                    </Stack>
                    <Collapse in={captionOpen}>
                      <Stack gap={1}>
                        <Row className="p-0 fs-2 justify-content-center">
                          {slide.links.map((link) => {
                            if (link.type === "github") {
                              return (
                                <Col xs="2" key={link.url}>
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-light mx-2 focus-ring"
                                    title="Github"
                                  >
                                    <Github className="svg-button">
                                      {link.url}
                                    </Github>
                                  </a>
                                </Col>
                              );
                            } else if (link.type === "appUrl") {
                              return (
                                <Col xs="2" key={link.url}>
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-light mx-2 focus-ring"
                                    title="Github"
                                  >
                                    <BoxArrowUpRight className="svg-button">
                                      {link.url}
                                    </BoxArrowUpRight>
                                  </a>
                                </Col>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </Row>
                      </Stack>
                    </Collapse>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col lg={8}>
            <h4 className="text-light">List of Tech</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
