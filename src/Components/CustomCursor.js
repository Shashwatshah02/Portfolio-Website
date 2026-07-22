import React, { useEffect, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";
import "./CustomCursor.css";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, .btn-antique";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!isCoarsePointer && !reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("cursor-active");

    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let targetX = cursorX;
    let targetY = cursorY;
    let raf;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) {
        cursorRef.current && cursorRef.current.classList.add("cursor-arrow-active");
      }
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) {
        cursorRef.current && cursorRef.current.classList.remove("cursor-arrow-active");
      }
    };

    const tick = () => {
      cursorX += (targetX - cursorX) * 0.18;
      cursorY += (targetY - cursorY) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <svg
      ref={cursorRef}
      className="custom-cursor-arrow"
      width="30"
      height="38"
      viewBox="0 0 30 38"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="cursor-arrow-body"
        d="M3 2.5 5.5 31l7.7-8.3 6 12.3 6.2-3-6.1-12.3 10.2-.8L3 2.5Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path className="cursor-arrow-ornament" d="m10.6 14.5 2.1 2.1-2.1 2.1-2.1-2.1 2.1-2.1Z" />
    </svg>
  );
}
