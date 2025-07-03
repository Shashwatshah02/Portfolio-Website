import "./EducationExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const rocket = "🚀";

const educationData = [
  {
    date: "Fall 2025 (Incoming)",
    title: "MS - Computer Engineering",
    subtitle: "New York University",
    description:
      "Will pursue advanced courses in Hardware and Software related fields under leading faculty.",
  },
  {
    date: "2022 - 2025",
    title: "B.Tech - Computer Engineering",
    subtitle: "Dwarkadas J. Sanghvi College of Engineering",
    description:
      "GPA: 9.35 | Focused on detailed learning to find my specific niche. Multiple participations in student chapters and events",
  },
  {
    date: "2019 - 2022",
    title: "Diploma - Computer Engineering",
    subtitle: "Shri Bhagubhai Mafatlal Polytechnic",
    description:
      "Percentage : 94.80 | Participated in Smart India Hackathon`22 . Focused on practical systems and full-stack web development.",
  },
  {
    date: "2006 - 2019",
    title: "High School",
    subtitle: "Activity High School",
    description:
      "Percentage : 95.00 | Built strong academic foundation. Excelled in science, computer basics, and national-level skating.",
  },
];

const internshipData = [
  {
    date: "Feb 2025 - Jul 2025",
    title: "Software Developer Intern",
    subtitle: "Nuvama Wealth",
    description:
      "Worked in collaboration with more than 20 people over 3 projects that were crucial and needed to be modernized",
  },
  {
    date: "Sept 2024 - Nov 2024",
    title: "Software Developer Intern",
    subtitle: "Hexagn",
    description:
      "Developed high-performance grocery e-commerce app using NestJS, Razorpay, and MySQL.",
  },
  {
    date: "Jan 2024 - June 2024",
    title: "NLP Research Intern",
    subtitle: "IIT Patna, LTRC Lab",
    description:
      "Worked on fine-tuning and Sentiment Analysis under Prof. Sriparna Saha. Explored transformers & hugging face use cases.",
  },
  {
    date: "June 2023 - Sep 2023",
    title: "React Developer Intern",
    subtitle: "Intro Internet Services",
    description:
      "Built dashboards using MERN stack. Handled dynamic route generation and reusable component design over an Environment safety website",
  },
  {
    date: "Jul 2021 - Aug 2021",
    title: "Frontend Intern",
    subtitle: "Designscape",
    description:
      "Designed and implemented UI for marketing websites using HTML/CSS and JavaScript. Learned basics of client-side interaction.",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-section">
      {/* Education Column */}
      <div className="timeline-column">
        <h2 className="timeline-title">Education</h2>
        <VerticalTimeline lineColor="#00ffff">
          {educationData.map((item, i) => (
            <VerticalTimelineElement
              key={i}
              date={item.date}
              icon={<div className="emoji-icon">{rocket}</div>}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 0 10px #00ffff66",
              }}
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                padding: 0,
              }}
              contentArrowStyle={{ display: "none" }}
            >
              <motion.div
                className="timeline-card"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <h3>{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Internship Column */}
      <div className="timeline-column">
        <h2 className="timeline-title">Internships</h2>
        <VerticalTimeline lineColor="#00ffff">
          {internshipData.map((item, i) => (
            <VerticalTimelineElement
              key={i}
              date={item.date}
              icon={<div className="emoji-icon">{rocket}</div>}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 0 10px #00ffff66",
              }}
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                padding: 0,
              }}
              contentArrowStyle={{ display: "none" }}
            >
              <motion.div
                className="timeline-card"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <h3>{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
