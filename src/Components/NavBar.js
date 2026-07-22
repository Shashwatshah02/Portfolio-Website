import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { Linkedin, Github, Instagram } from "react-bootstrap-icons";

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const OnScroll = () => {
      if (window.scrollY > 50) {
        // If the scroll is more than the height of 50
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", OnScroll);
    return () => {
      window.removeEventListener("scroll", OnScroll);
    };
  }, []);

  const activeLink = (value) => {
    setActive(value);
  };

  return (
    <Navbar
      className={`${scrolled ? "scrolled" : ""} ${
        expanded ? "navbar-open" : ""
      }`}
      expand="lg"
      onToggle={(expanded) => setExpanded(expanded)}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="me-auto navbar-wordmark">
          Shashwat<span className="dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                active === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                activeLink("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={
                active === "education" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                activeLink("education");
                setExpanded(false);
              }}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                active === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                activeLink("projects");
                setExpanded(false);
              }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shashwat-shah-391abb204/">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/Shashwatshah02">
                <Github size={16} />
              </a>
              <a href="https://www.instagram.com/shashwatshah02/">
                <Instagram size={16} />
              </a>
            </div>
            <a href="mailto:shashwatshah02@gmail.com">
              <button className="btn-antique">
                <span>Let's Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
