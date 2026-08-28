import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { Linkedin, Github, Instagram, FileEarmarkText } from "react-bootstrap-icons";
import sealLogo from "../assets/img/sns-seal.svg";
import ResumeModal from "./ResumeModal";

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
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
          <img src={sealLogo} alt="Shashwat Nimesh Shah" className="navbar-seal" />
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
              href="#experience"
              className={
                active === "experience" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                activeLink("experience");
                setExpanded(false);
              }}
            >
              Experience
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
              <a href="https://www.linkedin.com/in/shashwat-shah-391abb204/" rel="me" aria-label="Shashwat Shah on LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/Shashwatshah02" rel="me" aria-label="Shashwat Shah on GitHub">
                <Github size={16} />
              </a>
              <a href="https://www.instagram.com/shashwatshah02/" rel="me" aria-label="Shashwat Shah on Instagram">
                <Instagram size={16} />
              </a>
            </div>
            <button className="btn-antique" onClick={() => setResumeOpen(true)}>
              <FileEarmarkText size={15} />
              <span>Preview Resume</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
      <ResumeModal show={resumeOpen} onClose={() => setResumeOpen(false)} />
    </Navbar>
  );
}
