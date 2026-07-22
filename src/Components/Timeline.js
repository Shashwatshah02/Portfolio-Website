import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

const educationData = [
  {
    date: "2025 - 2027",
    title: "MS - Computer Engineering",
    subtitle: "New York University",
    description:
      "GPA: 3.73 | Pursuing advanced hardware and software courses under leading faculty.",
  },
  {
    date: "2022 - 2025",
    title: "B.Tech - Computer Engineering",
    subtitle: "Dwarkadas J. Sanghvi CoE",
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
    date: "Jun 2026 - Aug 2026",
    title: "Automation Developer Intern",
    subtitle: "UiPath",
    description:
      "Built client-facing RPA, Document Understanding, and Agentic AI automation solutions with UiPath Studio, including multi-agent orchestration pipelines and UiPath's internal project estimation platform using React, TypeScript, and Data Fabric.",
  },
  {
    date: "Sept 2025 - Present",
    title: "Graduate Assistant - Computer Eng. Labs",
    subtitle: "New York University",
    description:
      "Building robotic control algorithms and lab automation systems at NYU, improving accuracy and reducing experimental overhead.",
  },
  {
    date: "Feb 2025 - Aug 2025",
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: "easeOut" },
  }),
};

function EducationTimeline() {
  return (
    <section id="education" className="education-section grain-overlay">
      <div className="education-heading">
        <span className="section-eyebrow">Education</span>
        <h2>Built on curiosity</h2>
        <p>Hover over a milestone to uncover the full story.</p>
      </div>

      <div className="education-scroll" aria-label="Education timeline">
        <ol className="education-track">
          {educationData.map((item, index) => (
            <li key={item.title} className="education-milestone">
              <article className="education-card" tabIndex="0">
                <span className="education-marker" aria-hidden="true" />
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p className="education-school">{item.subtitle}</p>
                <div className="education-details">
                  <span>Details</span>
                  <p>{item.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineColumn({ title, items }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="timeline-column">
      <h2 className="timeline-title">{title}</h2>
      <VerticalTimeline lineColor="rgba(28, 23, 18, 0.2)">
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={<div className="emoji-icon"><span className="icon-dot" /></div>}
            iconStyle={{
              background: "#f6efe0",
              boxShadow: "none",
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
              variants={cardVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{ once: true }}
              custom={index}
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
  );
}

export default function Timeline() {
  return (
    <>
      <EducationTimeline />
      <section className="timeline-section grain-overlay">
        <TimelineColumn title="Internships" items={internshipData} />
      </section>
    </>
  );
}
