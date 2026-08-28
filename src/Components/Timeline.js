import React from "react";
import { motion, useReducedMotion } from "framer-motion";
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

export function EducationTimeline() {
  return (
    <section id="education" className="education-section grain-overlay">
      <div className="education-heading">
        <span className="section-eyebrow">Education</span>
        <h2>Built on curiosity</h2>
        <p>Four milestones that shaped the path I am on today.</p>
      </div>

      <div className="education-scroll" aria-label="Education timeline">
        <ol className="education-track">
          {educationData.map((item, index) => (
            <li key={item.title} className="education-milestone">
              <article className="education-card">
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

export function InternshipJourney() {
  const shouldReduceMotion = useReducedMotion();
  const mapStops = [
    {
      type: "goal",
      x: 72,
      y: 12,
      side: "left",
      date: "Next destination",
      title: "The Full-Time Chapter",
      subtitle: "New York · Open to opportunities",
      description: "Seeking a full-time software engineering role where I can build meaningful products, solve ambitious problems, and keep learning with a great team.",
    },
    ...internshipData.map((item, index) => ({
      ...item,
      type: "role",
      number: internshipData.length - index,
      x: [20, 78, 17, 82, 18, 79, 42][index],
      y: [21, 31, 41, 51, 62, 73, 84][index],
      side: ["right", "left", "right", "left", "right", "left", "right"][index],
    })),
    {
      type: "start",
      x: 70,
      y: 94,
      side: "left",
      date: "Where it began",
      title: "Start",
      subtitle: "Curiosity set the course",
      description: "The first step: learning to turn ideas into things people can use.",
    },
  ];

  return (
    <section id="experience" className="journey-section grain-overlay">
      <div className="journey-heading">
        <span className="section-eyebrow">Experience</span>
        <h2>The map so far</h2>
        <p>Follow the trail backwards—from the destination I’m pursuing to where the adventure began.</p>
      </div>

      <div className="treasure-map">
        <svg className="treasure-map-art" viewBox="0 0 1000 1600" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="treasure-trail"
            d="M700 1504 C680 1460 760 1420 650 1390 L540 1370 Q470 1355 420 1344 C320 1320 300 1270 380 1240 L640 1200 Q740 1180 790 1168 C850 1140 810 1090 690 1070 L300 1020 Q210 1005 180 992 C120 970 130 920 260 890 L680 840 Q780 825 820 816 C880 800 830 750 700 720 L300 680 Q210 660 170 656 C110 640 120 590 260 560 L650 510 Q740 498 780 496 C850 490 800 430 690 410 L320 355 Q230 340 200 336 C140 325 150 285 260 260 L560 210 Q660 195 720 192"
          />
        </svg>

        {mapStops.map((stop, index) => (
          <motion.div
            key={`${stop.type}-${stop.title}-${stop.subtitle}`}
            className={`map-stop map-stop-${stop.type} map-stop-${stop.side} ${stop.subtitle === "Designscape" ? "map-stop-designscape" : ""}`}
            style={{ "--stop-x": `${stop.x}%`, "--stop-y": `${stop.y}%` }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, rotate: stop.side === "left" ? 1 : -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : Math.min(index * 0.04, 0.25) }}
          >
            <span className="map-landmark" aria-hidden="true">
              {stop.type === "goal" ? "×" : stop.type === "start" ? "⚑" : stop.number}
            </span>
            <article className="map-note" tabIndex="0">
              <time>{stop.date}</time>
              <h3>{stop.type === "role" ? stop.subtitle : stop.title}</h3>
              <p className="map-company">{stop.type === "role" ? stop.title : stop.subtitle}</p>
              <p className="map-description">{stop.description}</p>
            </article>
          </motion.div>
        ))}

        <span className="map-inscription" aria-hidden="true">The path is still being drawn.</span>
      </div>
    </section>
  );
}

export default function Timeline() {
  return (
    <>
      <EducationTimeline />
      <InternshipJourney />
    </>
  );
}
