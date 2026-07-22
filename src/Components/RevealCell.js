import React from "react";
import useReveal from "../hooks/useReveal";

export default function RevealCell({ delay = 0, style = {}, children }) {
  const [ref, className] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay * 70}ms` }}
    >
      {children}
    </div>
  );
}
