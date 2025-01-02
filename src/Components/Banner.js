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
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    '<span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am currently pursuing a Bachelor's degree in Computer
                    Science at Dwarkadas J. Sanghvi College of Engineering. With
                    a current CGPA of 9.4/10, I have experience in Web/App
                    Development, IOT and AIML. With multiple internships
                   and research papers published, I'm a national-level artistic skater too.
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
