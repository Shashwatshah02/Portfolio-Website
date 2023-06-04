import React from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
export default function Projects() {
  const projects = [
    {
      title: "Business",
      description: "Design and Develeopement",
      imgUrl: projImg1,
    },
    {
      title: "Business",
      description: "Design and Develeopement",
      imgUrl: projImg2,
    },
    {
      title: "Business",
      description: "Design and Develeopement",
      imgUrl: projImg3,
    },
    {
      title: "Business",
      description: "Design and Develeopement",
      imgUrl: projImg3,
    },
    {
      title: "Business",
      description: "Design and Develeopement",
      imgUrl: projImg1,
    },
    {
      title: "Business",
      description: "Design and Develeopement",
      imgUrl: projImg2,
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              exercitationem tempora aperiam, quaerat autem consectetur
              excepturi sit voluptatum ea labore laboriosam, sequi asperiores
              qui quasi facilis repellat vel ut esse.
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Developement</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Photography</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Wordpress</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                    projects.map((project, index) => {
                      return (
                        
                          <ProjectCards key={index} {...project} />
                        
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p> Lorem Ipsum</p>
                  </Tab.Pane>
                <Tab.Pane eventKey="third"><p> Lorem Ipsum</p></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""  />
    </section>
  );
}
