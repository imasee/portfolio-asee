import React from "react";
import "./index.scss";
import { Container } from "react-bootstrap";

export default function ({ children, heading }) {
  return (
    <Container fluid className={`px-5 section ${heading}`}>
      <h4 className={`section__header mb-4 ${heading}__header`}>{heading}</h4>
      <div className={`section__content ${heading}__content`}>{children}</div>
    </Container>
  );
}
