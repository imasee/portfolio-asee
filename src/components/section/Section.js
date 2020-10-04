import React from "react";
import "./section.scss";
import Heading from "./SectionHeading";

export default function ({ children, heading, id }) {
  return (
    <div className={`section__container ${heading}`} id={id}>
      <Heading title={heading} className={`${heading}-heading`} />
      <div className="section__content">{children}</div>
    </div>
  );
}
