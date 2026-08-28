import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import useReveal from "../hooks/useReveal";
import useParallax from "../hooks/useParallax";
import heroJourneyVignette from "../assets/img/hero-journey-vignette.png";

export default function Banner() {
  const [contentRef, contentClass] = useReveal({ threshold: 0.05 });
  const [dividerRef, dividerClass] = useReveal({ threshold: 0.4 });
  const parallaxRef = useParallax(14);
  return (
    <section
      ref={parallaxRef}
      className="banner grain-overlay parallax-layer"
      id="home"
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={9} xl={8} className="text-center">
            <div ref={contentRef} className={contentClass}>
              <div className="hero-ornament">
                <div ref={dividerRef} className={`ornament-divider ${dividerClass}`}>
                  <span />
                </div>
              </div>
              <span className="tagline">Shashwat Nimesh Shah · Computer Engineer</span>
              <h1 aria-label="Oh, hey there!">
                <span className="hero-headline-accent">Oh, hey there!</span>
              </h1>
              <p className="mx-auto">
                From studying in Mumbai to working in New York, I've charted a path through Software Development, IoT, and AI/ML - refined across 6 internships, 4 research papers, and 3 patents. I am now pursuing my Master's in Computer Engineering at New York University. <br/>
                Nice to meet you :)
              </p>
              <a href="mailto:shashwatshah02@gmail.com">
                <button className="btn-antique">
                  <span>Let's Connect</span> <ArrowRightCircle size={18} />
                </button>
              </a>

              <figure className="hero-journey-vignette" aria-label="A collection of objects representing my creative and technical journey">
                <img
                  src={heroJourneyVignette}
                  alt="Laptop, camera, notebook, travel ticket, headphones, and artistic skate"
                />
              </figure>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
