import React, { useEffect, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";
import "./CustomCursor.css";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [role='button'], .btn-antique";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(finePointer.matches && !reducedMotion);

    updateEnabled();
    finePointer.addEventListener?.("change", updateEnabled);
    return () => finePointer.removeEventListener?.("change", updateEnabled);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return undefined;

    const cursor = cursorRef.current;
    if (!cursor) return undefined;

    document.body.classList.add("cursor-active");

    let targetX = -40;
    let targetY = -40;
    let ringX = targetX;
    let ringY = targetY;
    let raf = 0;

    const render = () => {
      // The dot is exact; only the decorative ring has a short, polished glide.
      cursor.style.setProperty("--cursor-x", `${targetX}px`);
      cursor.style.setProperty("--cursor-y", `${targetY}px`);
      ringX += (targetX - ringX) * 0.45;
      ringY += (targetY - ringY) * 0.45;
      cursor.style.setProperty("--ring-x", `${ringX}px`);
      cursor.style.setProperty("--ring-y", `${ringY}px`);

      if (Math.abs(targetX - ringX) > 0.1 || Math.abs(targetY - ringY) > 0.1) {
        raf = requestAnimationFrame(render);
      } else {
        raf = 0;
      }
    };

    const requestRender = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("custom-cursor-visible");
      cursor.classList.toggle(
        "custom-cursor-interactive",
        Boolean(event.target.closest?.(INTERACTIVE_SELECTOR))
      );
      requestRender();
    };

    const onLeave = () => cursor.classList.remove("custom-cursor-visible");
    const onEnter = () => cursor.classList.add("custom-cursor-visible");
    const onDown = () => cursor.classList.add("custom-cursor-pressed");
    const onUp = () => cursor.classList.remove("custom-cursor-pressed");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });

    return () => {
      document.body.classList.remove("cursor-active");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-dot" />
    </div>
  );
}
