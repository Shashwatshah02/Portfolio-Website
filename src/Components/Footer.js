import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Instagram, EnvelopeFill } from "react-bootstrap-icons";
import useReveal from "../hooks/useReveal";

export default function Footer() {
  const [dividerRef, dividerClass] = useReveal({ threshold: 0.4 });
  const [contentRef, contentClass] = useReveal({ threshold: 0.2 });

  return (
    <footer className="footer grain-overlay grain-overlay-dark">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} className="text-center">
            <div ref={dividerRef} className={`ornament-divider on-dark ${dividerClass}`}>
              <span />
            </div>
            <div ref={contentRef} className={contentClass}>
              <span className="footer-wordmark">
                Shashwat Shah<span className="dot">.</span>
              </span>
              <div className="social-icon mt-4 justify-content-center d-flex">
                <a href="https://www.linkedin.com/in/shashwat-shah-391abb204/">
                  <Linkedin size={16} />
                </a>
                <a href="https://github.com/Shashwatshah02">
                  <Github size={16} />
                </a>
                <a href="https://www.instagram.com/shashwatshah02/">
                  <Instagram size={16} />
                </a>
                <a href="mailto:shashwatshah02@gmail.com">
                  <EnvelopeFill size={16} />
                </a>
              </div>
              <p>CopyRight @ 2025. Shashwat Shah (All Rights Reserved)</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
