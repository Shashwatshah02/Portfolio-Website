import React, { useEffect, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";
import "./CustomCursor.css";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, .btn-antique";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!isCoarsePointer && !reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("cursor-active");

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let raf;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) {
        ringRef.current && ringRef.current.classList.add("cursor-ring-active");
      }
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) {
        ringRef.current && ringRef.current.classList.remove("cursor-ring-active");
      }
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
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
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
