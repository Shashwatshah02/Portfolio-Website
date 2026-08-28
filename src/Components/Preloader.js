import React, { useEffect, useState } from "react";
import sealLogo from "../assets/img/sns-seal.svg";
import useReducedMotion from "../hooks/useReducedMotion";
import "./Preloader.css";

export default function Preloader() {
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState("stamping"); // stamping -> holding -> exiting -> done

  useEffect(() => {
    if (reducedMotion) {
      const t = setTimeout(() => setStage("done"), 200);
      return () => clearTimeout(t);
    }
    const holdTimer = setTimeout(() => setStage("exiting"), 1500);
    const doneTimer = setTimeout(() => setStage("done"), 2100);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (stage === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  if (stage === "done") return null;

  return (
    <div className={`preloader ${stage === "exiting" ? "preloader-exiting" : ""}`}>
      <div className="preloader-impact" />
      <img src={sealLogo} alt="" className="preloader-seal" />
      <div className="preloader-rule">
        <span />
      </div>
    </div>
  );
}
