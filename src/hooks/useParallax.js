import { useEffect, useRef } from "react";
import useReducedMotion from "./useReducedMotion";

/**
 * Subtle scroll parallax: writes a `--parallax-offset` CSS custom property
 * onto the ref'd element as the page scrolls, imperatively (no re-renders).
 * Disabled for reduced-motion users and coarse-pointer (touch/mobile) devices.
 */
export default function useParallax(intensity = 18) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const progress = (viewportCenter - elementCenter) / window.innerHeight;
      const offset = progress * intensity;
      node.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion, intensity]);

  return ref;
}
