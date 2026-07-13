import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import header from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export default function Banner() {
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
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Engineering my story, beyond the screen</span>
                  <h1>
                    '<span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I'm Shashwat, a Computer Engineering Master's student at NYU and a CS grad. I build across Web & App Dev, IoT, and AI/ML, backed by 5 internships, 4 research papers, and 3 patents. Beyond tech, I'm a national-level artistic skater and stage actor, bringing a unique blend of precision and creativity to every challenge.
                  </p>
                  <a href="mailto:shashwatshah02@gmail.com">
                    <button>
                      <span style={{display:'flex'}}>Lets Connect <ArrowRightCircle size={25} /></span>
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} lg={6} xl={5}>
            <img src={header} alt="Header-Image" className="header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
