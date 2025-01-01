import React from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg2 from "../assets/img/cflex.jpg";
import projImg1 from "../assets/img/earthtag.jpg";
import projImg3 from "../assets/img/spotify.jpg";
import projImg4 from "../assets/img/tindog.jpg";
import projImg5 from "../assets/img/News-monkey.jpg";
import projImg6 from "../assets/img/portfolio.jpg";
import projImg7 from "../assets/img/shahcinepix.jpg";
import projImg8 from "../assets/img/homemade.jpg";
import i1 from "../assets/img/1.jpg";
import i2 from "../assets/img/2.jpg";
import i3 from "../assets/img/3.jpg";
import i4 from "../assets/img/4.jpg";
import i5 from "../assets/img/5.jpg";
import i6 from "../assets/img/6.jpg";
import i7 from "../assets/img/7.jpg";
import i8 from "../assets/img/8.jpg";
import i9 from "../assets/img/9.jpg";
import i10 from "../assets/img/10.jpg";
import i11 from "../assets/img/11.jpg";
import i12 from "../assets/img/12.jpg";
export default function Projects() {
  const projects = [
    {
      title: "EarthTag",
      description: "Environment is a go",
      imgUrl: projImg1,
    },
    {
      title: "C-Flex",
      description: "Conveyor belts",
      imgUrl: projImg2,
    },
    {
      title: "Spotify",
      description: "Simplistic music Album",
      imgUrl: projImg3,
    },
    {
      title: "Tindog",
      description: "Dogs are love",
      imgUrl: projImg4,
    },
    {
      title: "NewsMonkey",
      description: "One Stop news website",
      imgUrl: projImg5,
    },
    {
      title: "Portfolio",
      description: "React based developement",
      imgUrl: projImg6,
    },
    {
      title: "Shah Cinepix",
      description: "Design and Developement",
      imgUrl: projImg7,
    },
    {
      title: "Homemade Delights",
      description: "Food is good",
      imgUrl: projImg8,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
            Discover the fusion of creativity and technology in my projects, spanning web & app development, AI/ML, IoT, UI/UX design, WordPress/Shopify, and photo/video editing.
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
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i1} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>The beauty of nature</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i2} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Clear or Cloudy</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i3} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Flowers</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i4} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Books for life</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i5} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>The scenic beauty</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i6} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Basket of Fruits</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i7} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Clay play</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i8} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>The sealink</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i9} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Enlightening</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i12} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>The clarity</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i11} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Greenary</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={i10} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Roads or clouds</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={projImg7} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span></span>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4} style={{ display: "flex" }}>
                      <div className="proj-imgbx">
                        <img src={projImg8} alt="" height={"300px"} width={"100%"} />
                        <div className="proj-txtx">
                          <span>Food is good</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}
