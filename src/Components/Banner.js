import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import useReveal from "../hooks/useReveal";
import useParallax from "../hooks/useParallax";

export default function Banner() {
  const [contentRef, contentClass] = useReveal({ threshold: 0.05 });
  const [dividerRef, dividerClass] = useReveal({ threshold: 0.4 });
  const parallaxRef = useParallax(14);
  const toRotate = ["Hi There! 👋'", "I am Shashwat Shah!'"];
  const [loopNo, setLoopNo] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNo % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (deleting) {
      setDelta(100);
    }

    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setLoopNo(loopNo + 1);
      setDelta(200);
    }
  };
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
              <span className="tagline">Engineering my story, beyond the screen</span>
              <h1>
                '<span className="wrap">{text}</span>
              </h1>
              <p className="mx-auto">
                I'm Shashwat, a Computer Engineering Master's student at NYU and a CS grad. I build across Web & App Dev, IoT, and AI/ML, backed by 5 internships, 4 research papers, and 3 patents. Beyond tech, I'm a national-level artistic skater and stage actor, bringing a unique blend of precision and creativity to every challenge.
              </p>
              <a href="mailto:shashwatshah02@gmail.com">
                <button className="btn-antique">
                  <span>Let's Connect</span> <ArrowRightCircle size={18} />
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
