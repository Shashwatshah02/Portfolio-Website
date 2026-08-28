import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Instagram, EnvelopeFill } from "react-bootstrap-icons";
import useReveal from "../hooks/useReveal";

export default function Footer() {
  const [dividerRef, dividerClass] = useReveal({ threshold: 0.4 });
  const [contentRef, contentClass] = useReveal({ threshold: 0.2 });
  const currentYear = new Date().getFullYear();

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
                <a href="https://www.linkedin.com/in/shashwat-shah-391abb204/" rel="me" aria-label="Shashwat Shah on LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="https://github.com/Shashwatshah02" rel="me" aria-label="Shashwat Shah on GitHub">
                  <Github size={16} />
                </a>
                <a href="https://www.instagram.com/shashwatshah02/" rel="me" aria-label="Shashwat Shah on Instagram">
                  <Instagram size={16} />
                </a>
                <a href="mailto:shashwatshah02@gmail.com" aria-label="Email Shashwat Shah">
                  <EnvelopeFill size={16} />
                </a>
              </div>
              <p>Copyright © {currentYear} Shashwat Shah. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
