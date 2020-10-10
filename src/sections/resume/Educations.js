import React from "react";
import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";

export default function () {
  return (
    <Container className="px-0 my_resume_educations">
      <div className="my_resume_heading text-left mb-3">Educations</div>
      <TimelineItem />
    </Container>
  );
}
