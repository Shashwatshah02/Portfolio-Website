import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/img/Shashwat Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
        <Navbar.Brand href="#home" className="me-auto">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "180px", height: "100px" }}
          />
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
              href="#skills"
              className={
                active === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                activeLink("skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                active === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                activeLink("projects");
              }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shashwat-shah-391abb204/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Shashwatshah02">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/shashwatshah02/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <a href="mailto:shashwatshah02@gmail.com">
              <button className="vvd">
                <span>Lets Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
