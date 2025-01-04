import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import earthtag from "../assets/img/earthtag.jpg";
import projImg2 from "../assets/img/cflex.jpg";
import projImg3 from "../assets/img/spotify.jpg";
import projImg4 from "../assets/img/tindog.jpg";
import projImg5 from "../assets/img/News-monkey.jpg";
import projImg6 from "../assets/img/portfolio.jpg";
import projImg7 from "../assets/img/shahcinepix.jpg";
import projImg8 from "../assets/img/homemade.jpg";
import sih2024 from "../assets/img/sih2024.jpg"
import gasleakage from "../assets/img/gasleakage.jpg"
import singularity from "../assets/img/singularity.jpg"
import grocerystore from "../assets/img/grocerystore.jpg"
import shahcinepix from "../assets/img/shahcinepix.jpg"
import aapkaadhikar from "../assets/img/aapkaadhikar.jpg"
import flashchat from "../assets/img/flashchat.jpg"
import iitpatna from "../assets/img/iitpatna.jpg"
import research from "../assets/img/reseach.jpg"
import ola from "../assets/img/ola.jpg"
import landbot from "../assets/img/landbot.jpg"
import sih2022 from "../assets/img/sih2022.jpg"
import smarthome from "../assets/img/smarthome.jpg"
import sociopedia from "../assets/img/sociopedia.jpg"



import { useState } from "react";
import { Spotify, Wordpress } from "react-bootstrap-icons";
import { IconVaccine } from "@tabler/icons-react";

const cardData = [
  {
    header: "Smart India Hackathon 2024",
    title: "EcoVahak - India Post Sustainability !",
    text: "Ecovahak helps post offices throughout India gather ESG (Environmental, Social, and Governance) parameters using IoT sensors. It streamlines data collection, centralizes systems, and promotes sustainability initiatives.",
    listItems: [
      "IOT for fetching live data via sensors and camera.",
      "Mobile App with OCR for individual post offices.",
      "Website for Central Admin with Analytics. ",
    ],
    buttonText: "View Source Code", // Text for the button
    buttonIcon: "🚀", // Example emoji icon, replace with your logo
    buttonLink: "https://github.com/Shashwatshah02/sih_2024_hackstreet_boys",
    tags: ["#React", "#Flutter", "#AIML", "#IoT", "#MERN"," #Figma", "#Raspberry Pi", "#Chatbot", "#OCR"], // Tags for pinning
    imageUrl: sih2024, // Replace with actual image URLs
  },
  {
    header: "Patented Project  (202421078054)",
    title: "Gas Leakage Detector",
    text: "This patented IoT-enabled system detects gas leakage in pipelines, providing real-time alerts to prevent accidents. It ensures safety and efficiency with automated monitoring and alerts for timely intervention.",
    listItems: [
      "Real-time alerts via sensors to prevent hazards.",
      "Pi Camera for visual confirmation of gas leakage.",
      "Mobility over pipes and easy installation.",
    ],
    buttonText: "View Source Code", // Text for the button
    buttonIcon: "🔒", // Example emoji icon, replace with your logo
    buttonLink: "https://github.com/Shashwatshah02/gas_leakage_detector",
    tags: ["#IoT", "#Sensors", "#ML", "#Flutter", "#EmbeddedSystems", "#Raspberry Pi", "#Figma"], // Tags for pinning
    imageUrl: gasleakage, // Replace with actual image URLs
  },
  {
    header: "Research Paper under Review",
    title: "Exploring Ethical AI and Singularity",
    text: "A research paper investigating the ethical implications of AI surpassing human capabilities. Developed machine learning algorithms to reduce bias, particularly in hiring processes, ensuring fairness and transparency.",
    listItems: [
      "Analyzed the potential risks and rewards of AI.",
      "Use IMBLearn library to reduce Biases. ",
      "Developed bias-reduction algorithms for hiring processes.",
    ],
    buttonText: "View Research Work", // Text for the button
    buttonIcon: "📄", // Example emoji icon, replace with your logo
    buttonLink: "https://github.com/Shashwatshah02/Singularity_Hiring_Employees", // Replace with the actual link to the paper
    tags: ["#AI", "#Ethics", "#MachineLearning", "#Research", "#BiasReduction", "#Singularity"], // Tags for pinning
    imageUrl: singularity, // Replace with the actual image URL
},
{
  header: "Hexagn Internship Project",
  title: "E-Commerce Grocery Store Platform",
  text: "Developed a feature-rich e-commerce platform for a grocery store using the MERN stack. Designed and implemented the entire backend system, including REST APIs and database management, to ensure seamless operations and user experience.",
  listItems: [
    "Built REST APIs for product management, user authentication, and order processing.",
    "Integrated payment gateways for secure transactions.",
    "Developed an Admin Panel for easy updatation.",
  ],
  buttonText: "View Project Details", // Text for the button
  buttonIcon: "🛒", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/grocery_store", // Replace with the actual link, if available
  tags: ["#MERN", "#Backend", "#RESTAPI", "#Ecommerce", "#MongoDB", "#NodeJS", "#React", "#MySQL"], // Tags for pinning
  imageUrl: grocerystore, // Replace with the actual image URL
},
{
  header: "Photography Business Website",
  title: "Shah Photos(Cinepix)",
  text: "Developed a professional website for Shahcinepix.com, a photography business, using WordPress and Shopify. Leveraged no-code tools to create a user-friendly platform for showcasing portfolios and managing online sales seamlessly.",
  listItems: [
    "Designed an intuitive and visually appealing layout for showcasing photography portfolios.",
    "Integrated Shopify for seamless online sales and inventory management.",
    "Enhanced site performance with optimized plugins and responsive design.",
  ],
  buttonText: "Visit Website", // Text for the button
  buttonIcon: "📸", // Example emoji icon, replace with your logo
  buttonLink: "https://www.shahcinepix.com", // Replace with the actual link
  tags: ["#WordPress", "#NoCode", "#Shopify", "#Photography", "#ResponsiveDesign"], // Tags for pinning
  imageUrl: shahcinepix, // Replace with the actual image URL
},
{
  header: "Figma Design for Lawyer App",
  title: "Aapka Adhikaar",
  text: "Designed a comprehensive Figma prototype for 'Aapka Adhikaar,' an app aimed at encouraging lawyers to take on pro bono work. The app includes dashboards, leaderboards, and intuitive interfaces to streamline case management and track contributions.",
  listItems: [
    "Developed interactive dashboards for case tracking and management.",
    "Implemented a leaderboard system to gamify pro bono contributions.",
    "Crafted user-friendly interfaces for both lawyers and clients.",
  ],
  buttonText: "View Design Prototype", // Text for the button
  buttonIcon: "🎨", // Example emoji icon, replace with your logo
  buttonLink: "https://www.figma.com/design/7TTV79jgJJTcbptJ9b0DBo/SIH---Lawyer?node-id=0-1&t=Wb5QCj0MBwXdfHXj-1", // Replace with the actual prototype link
  tags: ["#Figma", "#UI/UX", "#ProBono", "#LawTech", "#DashboardDesign"], // Tags for pinning
  imageUrl: aapkaadhikar, // Replace with the actual image URL
},
{
  header: "Eco-friendly Project",
  title: "Earth Tag",
  text: "Earth Tag is an eco-friendly platform where customers earn coupons in return for their payments, while simultaneously contributing to environmental sustainability through tree planting. This innovative solution combines commerce with ecological responsibility.",
  listItems: [
    "Customers receive coupons with every payment made.",
    "For every payment, a tree is planted to offset the carbon footprint.",
    "Integrates payment gateway for seamless transactions and eco-friendly rewards.",
  ],
  buttonText: "View Source Code", // Text for the button
  buttonIcon: "🌱", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/EarthTag", // Replace with your actual link if applicable
  tags: ["#EcoFriendly", "#Sustainability", "#GreenTech", "#WebDevelopment", "#JavaScript", "#Node.js", "#MongoDB"], // Tags for pinning
  imageUrl: earthtag, // Replace with actual image URL
},
{
  header: "Real-time Chat Application",
  title: "FlashChat",
  text: "FlashChat is a real-time chat application developed with Flutter. It allows users to sign up, authenticate, and chat with each other in a seamless, instant messaging environment, similar to popular platforms like WhatsApp.",
  listItems: [
    "User authentication with Firebase for secure login.",
    "Real-time messaging with cloud database integration.",
    "Allows text, media sharing, and group chats."
  ],
  buttonText: "View Source Code", // Text for the button
  buttonIcon: "💬", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/Chatting-App", // Replace with your actual link if applicable
  tags: ["#Flutter", "#Firebase", "#ChatApp", "#RealTimeMessaging", "#Authentication", "#MobileApp"], // Tags for pinning
  imageUrl: flashchat, // Replace with actual image URL
},
{
  header: "Internship Project at IIT Patna",
  title: "Video to Text Conversion with Summarization",
  text: "This project focuses on converting video content into text and summarizing it to extract key information. Developed for the fintech domain, the system utilizes Assembly AI API for transcription and leverages Transformers and the pipeline features for efficient text summarization, providing insights from video data in a comprehensive manner.",
  listItems: [
    "Uses Assembly AI API for accurate video-to-text conversion.",
    "Employs Transformers and the pipeline feature for text summarization.",
    "Implemented in the fintech domain for seamless data extraction and analysis.",
    "Enhances understanding of video-based financial content with summarized insights.",
  ],
  buttonText: "View Source Code", // Text for the button
  buttonIcon: "📹", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/IIT-Patna-Research-Internship/", // Replace with your actual link if applicable
  tags: ["#FinTech", "#VideoToText", "#Summarization", "#AssemblyAI", "#Transformers", "#APIs", "#MachineLearning"], // Tags for pinning
  imageUrl: iitpatna, // Replace with actual image URL
},
{
  header: "Research Internship Automation",
  title: "Automated Cold Mailing System",
  text: "This project automates the cold mailing process for Master's students seeking research internships. By scraping multiple CSV files of professors from various academic platforms, it removes the hassle of manually contacting professors, streamlining the application process and saving valuable time for students.",
  listItems: [
    "Automates the process of sending personalized cold emails to professors.",
    "Uses web scraping to gather CSV files containing professors' contact details.",
    "Helps Master's students reach out to potential research mentors with ease.",
    "Streamlines internship applications, allowing students to focus on research.",
  ],
  buttonText: "View Source Code", // Text for the button
  buttonIcon: "📧", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/research_internship_automation", // Replace with your actual link if applicable
  tags: ["#WebScraping", "#Automation", "#ColdMailing", "#ResearchInternships", "#Python", "#CSV",], // Tags for pinning
  imageUrl: research, // Replace with actual image URL
},
{
  header: "Ride Sharing App",
  title: "Ola Clone",
  text: "The Ola Clone is a ride-sharing application developed using the Ionic framework. It leverages the Google Places API for location-based services and features an intuitive user interface for easy ride booking, providing a seamless experience for users looking for quick transportation.",
  listItems: [
    "Developed using the Ionic framework for cross-platform functionality.",
    "Integrated Google Places API for accurate location services and search.",
    "User-friendly interface to book rides easily and efficiently.",
    "Real-time tracking and location updates for a seamless ride experience.",
  ],
  buttonText: "View Source Code", // Text for the button
  buttonIcon: "🚗", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/ionic-Ola", // Replace with your actual link if applicable
  tags: ["#Ionic", "#GooglePlacesAPI", "#MobileApp", "#RideSharing", "#UI", "#CrossPlatform"], // Tags for pinning
  imageUrl: ola, // Replace with actual image URL
},
{
  header: "WhatsApp Chatbot with Payment Integration",
  title: "WhatsApp Chatbot with Razorpay & IVR",
  text: "This WhatsApp chatbot offers seamless payment integration using Razorpay, enabling users to complete transactions directly within the chat. It also features an Interactive Voice Response (IVR) system, where users can interact with an automated voice (customized with your own voice) for various services, creating an intuitive and efficient user experience.",
  listItems: [
    "Integrated Razorpay for seamless payment processing within WhatsApp chat.",
    "Implemented IVR with your own voice for a personalized touch in user interactions. Check - exotel.com",
    "Allows users to complete transactions and access services via chatbot interface.",
    "Supports various automated tasks and services via WhatsApp, improving user engagement.",
  ],
  buttonText: "View Resource", // Text for the button
  buttonIcon: "🤖", // Example emoji icon, replace with your logo
  buttonLink: "https://landbot.io/", // Replace with your actual link if applicable
  tags: ["#WhatsAppBot", "#Razorpay", "#IVR", "#VoiceIntegration", "#Chatbot", "#PaymentIntegration", "#Python"], // Tags for pinning
  imageUrl: landbot, // Replace with actual image URL
},
{
  header: "Smart India Hackathon 2022",
  title: "Scholarship Grant System",
  text: "This project, developed for the Smart India Hackathon 2022, aimed to streamline the scholarship grant process by providing financial aid to students at the earliest. Using the Django framework for backend development, the system integrates OpenCV for automated document verification, ensuring a secure and efficient process for scholarship applications.",
  listItems: [
    "Developed using Django framework for seamless backend management.",
    "Used OpenCV for automated document verification to ensure authenticity.",
    "Streamlined the scholarship application process, providing quick financial aid.",
    "Enhanced security and efficiency by automating the document validation process.",
  ],
  buttonText: "View Source Code", // Text for the button
  buttonIcon: "🎓", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/sih_2022", // Replace with your actual link if applicable
  tags: ["#SIH2022", "#Django", "#OpenCV", "#Scholarship", "#Automation", "#BackendDevelopment", "#DocumentVerification"], // Tags for pinning
  imageUrl: sih2022, // Replace with actual image URL
},
{
  header: "Smart Home Automation",
  title: "IoT Smart Home System",
  text: "This Smart Home project enables the control of a fan and light using IoT and a Flutter application. The system allows users to remotely manage their devices via the app, providing convenience and energy efficiency. The IoT-enabled devices can be switched on/off, with real-time status updates, enhancing the automation experience.",
  listItems: [
    "Controls fan and light using IoT for remote management.",
    "Developed a Flutter application for seamless control and monitoring.",
    "Real-time status updates for both fan and light in the mobile app.",
    "Improves convenience and energy efficiency with automated device control.",
  ],
  buttonText: "View Source Code", // Text for the button
  buttonIcon: "🏠", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/RaspberryPi-Codes", // Replace with your actual link if applicable
  tags: ["#IoT", "#Flutter", "#SmartHome", "#Automation", "#EnergyEfficiency", "#MobileApp"], // Tags for pinning
  imageUrl: smarthome, // Replace with actual image URL
},
{
  header: "Social Media for Seniors",
  title: "Sociopedia",
  text: "Sociopedia is a social media website designed specifically for the elderly, helping them connect with others, reduce boredom, and stay engaged. Built with the MERN stack, this platform offers a user-friendly interface for older adults to socialize, share posts, and interact with their peers, enhancing their quality of life and promoting mental well-being.",
  listItems: [
    "Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    "Designed with an intuitive, user-friendly interface for older adults.",
    "Allows seniors to connect with peers, share posts, and participate in social activities.",
    "Helps reduce boredom and loneliness, promoting better mental health.",
  ],
  buttonText: "View Source Code", // Text for the button
  buttonIcon: "🌐", // Example emoji icon, replace with your logo
  buttonLink: "https://github.com/Shashwatshah02/SocioPedia", // Replace with your actual link if applicable
  tags: ["#MERN", "#SocialMedia", "#Elderly", "#MentalHealth", "#SocialConnection", "#FullStackDevelopment"], // Tags for pinning
  imageUrl: sociopedia, // Replace with actual image URL
}






// --> Few more projects that canbe added
// Figma BookmyShow
// Homemade Delights Wordpress
// SIH 2022
// ionic ola
// github clone at spit hackathon
// pictures related to photography
// blog website
// admin dashboard
// tindog
// Spotify
// newsmonkey
// weather api
// covid IconVaccine
// shopify toothbrush
// cflex internship
// sociopedia
// todolist
// razorpay
// whatsap bot
// IVR
// smart home
// autmation email
// findmymetro



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
            <h2>Latest Projects</h2>
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
                        style={{ color: "white", textAlign: "justify", margin: 0, width: "100%" }}
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
                    <a href={card.buttonLink}>
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
                      </a>
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
