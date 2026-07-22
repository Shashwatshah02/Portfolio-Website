import React, { useState, useEffect } from "react";
import { BentoGrid } from "react-bento";
import { bentoItems } from "./BentoItems";
import useReveal from "../hooks/useReveal";
import "./bentoGrid.css";

const MyBentoGrid = () => {
  const [gridCols, setGridCols] = useState(3);
  const [rowHeight, setRowHeight] = useState("auto");
  const [headingRef, headingClass] = useReveal({ threshold: 0.4 });

  // Update grid settings based on window size
  const updateGridSettings = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setGridCols(1);
      setRowHeight("auto");
    } else if (width <= 900) {
      setGridCols(2);
      setRowHeight(100);
    } else {
      setGridCols(3);
      setRowHeight(120);
    }
  };

  useEffect(() => {
    updateGridSettings();
    window.addEventListener("resize", updateGridSettings);
    return () => window.removeEventListener("resize", updateGridSettings);
  }, []);

  return (
    <div className="bento-container contact grain-overlay grain-overlay-dark">
      <h2 ref={headingRef} className={headingClass}>A Peek Into My Life</h2>
      <BentoGrid
        items={bentoItems}
        gridCols={gridCols}
        rowHeight={rowHeight}
        classNames={{
          container: "bento-grid-container",
          elementContainer: "bento-element",
        }}

      />
    </div>
  );
};

export default MyBentoGrid;
