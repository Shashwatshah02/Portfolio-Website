import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I am a multi-talented individual working on projects related to C, Python, Web Dev, Ionic,
                Flutter, along with that embracing the
                exhilarating world of skating, captivating stage shows, engaging
                skits, and the captivating artistry of photography, allowing me
                to explore diverse avenues of self-expression and creativity.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Developement</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Photography</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Cycling</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Skating</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Acting</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt=""
        className="backgroud-image-left"
        style={{ width: "auto", height: "10px" }}
      />
    </section>
  );
}
