import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/earthtag.jpg";
import projImg2 from "../assets/img/cflex.jpg";
import projImg3 from "../assets/img/spotify.jpg";
import projImg4 from "../assets/img/tindog.jpg";
import projImg5 from "../assets/img/News-monkey.jpg";
import projImg6 from "../assets/img/portfolio.jpg";
import projImg7 from "../assets/img/shahcinepix.jpg";
import projImg8 from "../assets/img/homemade.jpg";
import { useState } from "react";

const cardData = [
  {
    header: "SIH 2024",
    title: "Card Title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "View More", // Text for the button
    buttonIcon: "🚀", // Example emoji icon, replace with your logo
    tags: ["#React", "#JavaScript", "#WebDev"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap1", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "Learn More", // Text for the button
    buttonIcon: "📚", // Example emoji icon, replace with your logo
    tags: ["#AI", "#ML", "#DeepLearning"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap2", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "Explore Project", // Text for the button
    buttonIcon: "🌍", // Example emoji icon, replace with your logo
    tags: ["#Design", "#UI/UX", "#WebApp"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap3", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "View More", // Text for the button
    buttonIcon: "🚀", // Example emoji icon, replace with your logo
    tags: ["#React", "#JavaScript", "#WebDev"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap1", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "Learn More", // Text for the button
    buttonIcon: "📚", // Example emoji icon, replace with your logo
    tags: ["#AI", "#ML", "#DeepLearning"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap2", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "Explore Project", // Text for the button
    buttonIcon: "🌍", // Example emoji icon, replace with your logo
    tags: ["#Design", "#UI/UX", "#WebApp"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap3", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "View More", // Text for the button
    buttonIcon: "🚀", // Example emoji icon, replace with your logo
    tags: ["#React", "#JavaScript", "#WebDev"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap1", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "Learn More", // Text for the button
    buttonIcon: "📚", // Example emoji icon, replace with your logo
    tags: ["#AI", "#ML", "#DeepLearning"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap2", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "Explore Project", // Text for the button
    buttonIcon: "🌍", // Example emoji icon, replace with your logo
    tags: ["#Design", "#UI/UX", "#WebApp"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap3", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "View More", // Text for the button
    buttonIcon: "🚀", // Example emoji icon, replace with your logo
    tags: ["#React", "#JavaScript", "#WebDev"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap1", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "Learn More", // Text for the button
    buttonIcon: "📚", // Example emoji icon, replace with your logo
    tags: ["#AI", "#ML", "#DeepLearning"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap2", // Replace with actual image URLs
  },
  {
    header: "SIH 2024",
    title: "Card Title 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    listItems: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Vestibulum at eros",
    ],
    buttonText: "Explore Project", // Text for the button
    buttonIcon: "🌍", // Example emoji icon, replace with your logo
    tags: ["#Design", "#UI/UX", "#WebApp"], // Tags for pinning
    imageUrl: "holder.js/100px180?text=Image+cap3", // Replace with actual image URLs
  },
];

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState(6); // Number of cards initially displayed

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 6); // Load 6 more cards on click
  };
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Discover the fusion of creativity and technology in my projects,
              spanning web & app development, AI/ML, IoT, UI/UX design, and
              more.
            </p>
            <Row className="g-3">
              {" "}
              {/* Reduced gap between cards */}
              {cardData.slice(0, visibleCards).map((card, index) => (
                <Col xs={12} sm={12} md={6} lg={4} key={index}>
                  <Card
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "transparent",
                      border: "2px solid white",
                      borderRadius: "20px",
                      padding: "10px",
                      position: "relative",
                    }}
                  >
                    <Card.Header
                      style={{ color: "white", backgroundColor: "transparent" }}
                    >
                      {card.header}
                    </Card.Header>
                    <Card.Img variant="top" src={card.imageUrl} />
                    <Card.Body style={{ color: "white", textAlign: "center" }}>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text
                        style={{ color: "white", textAlign: "left", margin: 0 }}
                      >
                        {card.text}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      {card.listItems.map((item, idx) => (
                        <ListGroup.Item
                          key={idx}
                          style={{
                            color: "white",
                            backgroundColor: "transparent",
                            textAlign: "left",
                          }}
                        >
                          {item}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    {/* Tags Section */}
                    <Card.Footer
                      style={{
                        backgroundColor: "transparent",
                        justifyContent: "center",
                        borderTop: "none",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        padding: "10px 0",
                      }}
                    >
                      {card.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "20px",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                            fontSize: "12px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </Card.Footer>
                    {/* Button Section */}
                    <Card.Body
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        marginTop: "auto",
                      }}
                    >
                      <Button
                        variant="primary"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <span>{card.buttonIcon}</span>
                        {card.buttonText}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {visibleCards < cardData.length && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button
                  onClick={handleLoadMore}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                >
                  Load More
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}
