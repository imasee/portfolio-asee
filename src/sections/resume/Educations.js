import React from "react";
import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";


const educations = [
  {
    id: 0,
    college: "Humber College",
    location: "Toronto, ON",
    degree: "Postgraduate Diploma",
    major: "Information Technology Solutions",
    dateFrom: "2018",
    dateTo: "2019"
  },
  {
    id: 1,
    college: "University Of Calicut",
    location: "India",
    degree: "Bachelor Of Science",
    major: "Computer Applications",
    dateFrom: "2013",
    dateTo: "2016"
  },
]

export default function () {
  return (
    <Container className="px-0 my_resume_educations">
      <div className="my_resume_heading text-left mb-3">Educations</div>
      {
        educations.map(
          e => {
            return <TimelineItem
              institution={e.college}
              location={e.location}
              role={e.degree}
              roleSub={e.major}
              dateTo={e.dateTo}
              datefrom={e.dateFrom}
            />
          }
        )
      }
    </Container>
  );
}
