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
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
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
              Over the years, I’ve gained experience in a variety of fields, from UI/UX, web and app development to AI/ML and IoT. I also enjoy working on WordPress and Shopify for building user-friendly websites, and my creative side comes alive with photo and video editing. These skills reflect my passion for technology and creativity, and I’m always excited to learn and take on new challenges.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true} // Enables autoplay
                autoPlaySpeed={2000} // S
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>App Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>AI / ML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Internet Of Things</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>UI / UX Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Wordpress / Shopify</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Photo / Video Editing</h5>
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
