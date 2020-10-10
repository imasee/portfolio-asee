import React from "react";
import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";

export default function () {
  return (
    <Container className="p-0 my_resume_educations">
      <div className="my_resume_education_heading text-left">Education</div>
      <TimelineItem />
    </Container>
  );
}
