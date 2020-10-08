import React from "react";
import "./index.scss";
import { Container } from "react-bootstrap";

export default function ({ children, headingFirst, headingSecond, className }) {
  return (
    <Container fluid className={`p-0 section ${className}`}>
      <h4 className={`section__header mb-4 ${className}__header`}>
        <span className="mr-2 pb-1">{headingFirst}</span>
        <span>{headingSecond}</span>
      </h4>
      <div className={`section__content ${className}__content text-center p-0`}>
        {children}
      </div>
    </Container>
  );
}
