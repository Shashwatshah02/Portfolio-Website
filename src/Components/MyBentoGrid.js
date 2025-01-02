import React, { useState, useEffect } from "react";
import { BentoGrid } from "react-bento";
import { bentoItems } from "./BentoItems";
import "./bentoGrid.css";

const MyBentoGrid = () => {
  const [gridCols, setGridCols] = useState(3);
  const [rowHeight, setRowHeight] = useState("auto");

  // Update grid settings based on window size
  const updateGridSettings = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setGridCols(1); // One column for mobile devices
      setRowHeight("auto"); // Auto height for flexibility
    } else if (width <= 1200) {
      setGridCols(2); // Two columns for tablets
      setRowHeight(180); // Set a fixed row height
    } else {
      setGridCols(3); // Three columns for large screens
      setRowHeight(200); // Set a fixed row height
    }
  };

  useEffect(() => {
    updateGridSettings();
    window.addEventListener("resize", updateGridSettings);
    return () => window.removeEventListener("resize", updateGridSettings);
  }, []);

  return (
    <div className="bento-container contact">
      <h2>A Peek Into My Life</h2>
      <BentoGrid
        items={bentoItems}
        gridCols={gridCols}
        rowHeight={rowHeight}
        classNames={{
          container: "bento-grid-container",
          elementContainer: "bento-element",
        }}
        style={{ backgroundColor: "#121212", color: "#ffffff" }}
      />
    </div>
  );
};

export default MyBentoGrid;
