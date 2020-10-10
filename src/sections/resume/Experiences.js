import React from "react";
import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";


const educations = [
  {
    id: 0,
    company: "Maplebots Inc",
    location: "Kitchener, ON",
    role: "Fullstack Web Developer",
    dateFrom: "2020",
    dateTo: "Present"
  },
]

export default function () {
  return (
    <Container className="p-0 my_resume_experiences my-3 pt-1">
      <div className="my_resume_heading text-left">Experience</div>
      {
        educations.map(
          e => {
            return <TimelineItem
              institution={e.company}
              location={e.location}
              role={e.role}
              dateTo={e.dateTo}
              datefrom={e.dateFrom}
            />
          }
        )
      }
    </Container>
  );
}
