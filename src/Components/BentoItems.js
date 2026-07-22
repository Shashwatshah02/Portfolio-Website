// src/bentoItems.js
import React from "react";
import RevealCell from "./RevealCell";

export const bentoItems = [

  {
    id: 2,
    title: "Researcher & Innovator",
    color: "#2ecc71",
    element: (
      <RevealCell delay={0} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Author of 4 research papers and 3 patent in computer science & related fields.
      </RevealCell>
    ),
    width: 2,
    height: 1,
  },
  {
    id: 4,
    title: "Versatile Athlete",
    color: "#e74c3c",
    element: (
      <RevealCell delay={1} style={{ padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Passionate about sports: badminton, table tennis, running, cycling, and shooting.
      </RevealCell>
    ),
    width: 1,
    height: 2,
  },
  {
    id: 1,
    title: "National-Level Skater",
    color: "#3498db",
    element: (
      <RevealCell delay={2} style={{ padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        National-level skater with 100+ medals and a performance in front of the President of India.
      </RevealCell>
    ),
    width: 1,
    height: 2,
  },
  {
    id: 6,
    title: "Positive Attitude",
    color: "#1abc9c",
    element: (
      <RevealCell delay={3} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Strong interpersonal skills and a positive attitude that fosters teamwork.
      </RevealCell>
    ),
    width: 1,
    height: 1,
  },

  {
    id: 5,
    title: "Diploma in Computer Engineering",
    color: "#9b59b6",
    element: (
      <RevealCell delay={4} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Winner at Hack NYU - 24hr Hackathon.
      </RevealCell>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 3,
    title: "Typing Speed",
    color: "#f39c12",
    element: (
      <RevealCell delay={5} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Average typing speed of 88 WPM, with a peak of 131 WPM.
      </RevealCell>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 3,
    title: "Typing Speed",
    color: "#f39c12",
    element: (
      <RevealCell delay={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        I have completed over 1.5 years of experience through five diverse internships.
      </RevealCell>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 8,
    title: "Cycling for Environment",
    color: "#34495e",
    element: (
      <RevealCell delay={7} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Cycled over 5000 km for environmental causes, including multiple cyclothons.
      </RevealCell>
    ),
    width: 2,
    height: 1,
  },

  {
    id: 7,
    title: "Family Business Support",
    color: "#f1c40f",
    element: (
      <RevealCell delay={8} style={{ padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Assist in my father's photography and videography business.
      </RevealCell>
    ),
    width: 1,
    height: 2,
  },
  {
    id: 9,
    title: "Drama & Theatre",
    color: "#e67e22",
    element: (
      <RevealCell delay={9} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Performed in 15+ national-level plays at venues like the Royal Opera House and NCPA.
      </RevealCell>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 10,
    title: "Shooting",
    color: "#d35400",
    element: (
      <RevealCell delay={10} style={{ padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Awarded 2 gold medals in rifle and pistol shooting at the institute level.
      </RevealCell>
    ),
    width: 1,
    height: 2,
  },
  {
    id: 11,
    title: "Seminar & Mentorship",
    color: "#e67e22",
    element: (
      <RevealCell delay={11} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        Conducted seminars to mentor juniors and help them grow :)
      </RevealCell>
    ),
    width: 1,
    height: 1,
  },
];
