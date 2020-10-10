import React from "react";
import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";

export default function () {
  return (
    <Container className="p-0 my_resume_experiences">
      <div className="my_resume_heading text-left">Experience</div>
      <TimelineItem />
    </Container>
  );
}
