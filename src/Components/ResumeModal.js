import React, { useEffect } from "react";
import { XLg, Download } from "react-bootstrap-icons";
import "./ResumeModal.css";

const RESUME_PATH = `${process.env.PUBLIC_URL}/Shashwat-Shah-Resume.pdf`;

export default function ResumeModal({ show, onClose }) {
  useEffect(() => {
    if (!show) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="resume-modal-backdrop" onMouseDown={onClose}>
      <div
        className="resume-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <span className="resume-modal-title">Resume</span>
          <div className="resume-modal-actions">
            <a
              className="btn-antique resume-modal-download"
              href={RESUME_PATH}
              download="Shashwat-Shah-Resume.pdf"
            >
              <Download size={14} />
              <span>Download</span>
            </a>
            <button
              className="resume-modal-close"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <XLg size={16} />
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe src={RESUME_PATH} title="Shashwat Shah — Resume" />
        </div>
      </div>
    </div>
  );
}
