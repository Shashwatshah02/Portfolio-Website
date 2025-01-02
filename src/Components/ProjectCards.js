import React from "react";
import { Col, Button } from "react-bootstrap";

export default function ProjectCards({ title, subheading, description, link, buttonText, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" height={"300"} width={"100%"} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5>{subheading}</h5>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">{buttonText}</Button>
          </a>
        </div>
      </div>
    </Col>
  );
}
