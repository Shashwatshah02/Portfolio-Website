import { useEffect, useRef, useState } from "react";
import useReducedMotion from "./useReducedMotion";

/**
 * Scroll-triggered reveal: returns a ref to attach to an element and a
 * className ("reveal" or "reveal reveal-visible") driven by IntersectionObserver.
 * Fires once. Skips animation entirely when the user prefers reduced motion.
 */
export default function useReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  const className = `reveal${visible ? " reveal-visible" : ""}`;
  return [ref, className];
}
