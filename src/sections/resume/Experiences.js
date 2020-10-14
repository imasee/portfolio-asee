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
    <Container className="p-0 my_resume_experiences my-0 pt-1" fluid>
      {/* <div className="my_resume_heading text-left mb-3">
        <span className="d-inline-block mx-0 mx-md-3">Experiences</span>
      </div> */}
      {
        educations.map(
          (e, i) => {
            return <TimelineItem
              institution={e.company}
              location={e.location}
              role={e.role}
              dateTo={e.dateTo}
              datefrom={e.dateFrom}
              icon="fa-briefcase"
              key={i}
              delay={(i + 1) * 300}
            >

            </TimelineItem>
          }
        )
      }
    </Container>
  );
}
