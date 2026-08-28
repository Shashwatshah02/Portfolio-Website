import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import useReveal from "../hooks/useReveal";
import useReducedMotion from "../hooks/useReducedMotion";
import "./bentoGrid.css";

const stories = [
  {
    title: "Researcher & Innovator",
    text: "Author of 4 research papers and 3 patent in computer science & related fields.",
  },
  {
    title: "Versatile Athlete",
    text: "Passionate about sports: badminton, table tennis, running, cycling, and shooting.",
  },
  {
    title: "National-Level Skater",
    text: "National-level skater with 100+ medals and a performance in front of the President of India.",
  },
  {
    title: "Positive Attitude",
    text: "Strong interpersonal skills and a positive attitude that fosters teamwork.",
  },
  {
    title: "Hack NYU Winner",
    text: "Winner at Hack NYU - 24hr Hackathon.",
  },
  {
    title: "Typing Speed",
    text: "Average typing speed of 88 WPM, with a peak of 131 WPM.",
  },
  {
    title: "Internship Experience",
    text: "I have completed over 1.5 years of experience through five diverse internships.",
  },
  {
    title: "Cycling for Environment",
    text: "Cycled over 5000 km for environmental causes, including multiple cyclothons.",
  },
  {
    title: "Family Business Support",
    text: "Assist in my father's photography and videography business.",
  },
  {
    title: "Drama & Theatre",
    text: "Performed in 15+ national-level plays at venues like the Royal Opera House and NCPA.",
  },
  {
    title: "Shooting",
    text: "Awarded 2 gold medals in rifle and pistol shooting at the institute level.",
  },
  {
    title: "Seminar & Mentorship",
    text: "Conducted seminars to mentor juniors and help them grow :)",
  },
];

const spreadCount = stories.length / 2;

function BookPage({ story, pageNumber, side, hidden = false }) {
  return (
    <article className={`life-book-page life-book-page-${side}`} aria-hidden={hidden}>
      <div className="life-book-page-topline">
        <span>A Peek Into My Life</span>
        <span>{String(pageNumber).padStart(2, "0")}</span>
      </div>
      <div className="life-book-page-content">
        <span className="life-book-mark">Chapter {String(pageNumber).padStart(2, "0")}</span>
        <h3>{story.title}</h3>
        <span className="life-book-rule" />
        <p>{story.text}</p>
      </div>
      <span className="life-book-corner" aria-hidden="true">S · S</span>
    </article>
  );
}

export default function MyBentoGrid() {
  const [spread, setSpread] = useState(0);
  const [targetSpread, setTargetSpread] = useState(null);
  const [flipping, setFlipping] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const headingReveal = useReveal({ threshold: 0.4 });
  const reducedMotion = useReducedMotion();

  const turnTo = useCallback((nextSpread) => {
    if (flipping) return;
    const normalized = (nextSpread + spreadCount) % spreadCount;

    if (reducedMotion) {
      setSpread(normalized);
      setTargetSpread(null);
      return;
    }

    setTargetSpread(normalized);
    setFlipping(true);
    timerRef.current = window.setTimeout(() => {
      setSpread(normalized);
      setTargetSpread(null);
      setFlipping(false);
    }, 760);
  }, [flipping, reducedMotion]);

  useEffect(() => {
    if (paused || flipping) return undefined;
    const interval = window.setInterval(() => turnTo(spread + 1), 3000);
    return () => window.clearInterval(interval);
  }, [flipping, paused, spread, turnTo]);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const currentLeft = stories[spread * 2];
  const currentRight = stories[spread * 2 + 1];
  const incomingSpread = targetSpread ?? (spread + 1) % spreadCount;
  const nextLeft = stories[incomingSpread * 2];
  const nextRight = stories[incomingSpread * 2 + 1];

  return (
    <section className="bento-container grain-overlay">
      <div className="life-book-heading" ref={headingReveal[0]}>
        <span className={`life-book-kicker ${headingReveal[1]}`}>Beyond the résumé</span>
        <h2 className={headingReveal[1]}>A Peek Into My Life</h2>
        <p className={headingReveal[1]}>A few pages from the pursuits and experiences that shaped me.</p>
      </div>

      <div
        className={`life-book ${flipping ? "is-flipping" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        <div className="life-book-volume">
          <div className="life-book-cover" aria-hidden="true" />
          <div className="life-book-page-block life-book-page-block-left" aria-hidden="true" />
          <div className="life-book-page-block life-book-page-block-right" aria-hidden="true" />
          <div className="life-book-spine" aria-hidden="true" />
          <div className="life-book-spread">
            <BookPage story={currentLeft} pageNumber={spread * 2 + 1} side="left" />
            <BookPage
              story={flipping ? nextRight : currentRight}
              pageNumber={(flipping ? incomingSpread : spread) * 2 + 2}
              side="right"
            />

            {flipping && (
              <div className="life-book-turn" aria-hidden="true">
                <div className="life-book-turn-front">
                  <BookPage story={currentRight} pageNumber={spread * 2 + 2} side="right" hidden />
                </div>
                <div className="life-book-turn-back">
                  <BookPage story={nextLeft} pageNumber={incomingSpread * 2 + 1} side="left" hidden />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="life-book-controls">
          <button type="button" onClick={() => turnTo(spread - 1)} aria-label="Previous pages">
            <ArrowLeft size={16} />
          </button>
          <div className="life-book-pagination" aria-label={`Spread ${spread + 1} of ${spreadCount}`}>
            {Array.from({ length: spreadCount }, (_, index) => (
              <button
                type="button"
                key={index}
                className={index === spread ? "active" : ""}
                onClick={() => turnTo(index)}
                aria-label={`Go to spread ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => turnTo(spread + 1)} aria-label="Next pages">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
