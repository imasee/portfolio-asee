import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import TimelineItem from "./TimelineItem";


const educations = [
  {
    id: 0,
    college: "Humber College",
    location: "Toronto, ON",
    degree: "Postgraduate Diploma",
    major: "Information Technology Solutions",
    dateFrom: "2018",
    dateTo: "2019",
    logo: "/assets/images/humber.jpeg",
    descriptions: [
      "GPA: 3.2/4.0"
    ]
  },
  {
    id: 1,
    college: "University Of Calicut",
    location: "India",
    degree: "Bachelor Of Science",
    major: "Computer Applications",
    dateFrom: "2013",
    dateTo: "2016",
    logo: "/assets/images/calicut-university.jpeg",
    descriptions: [
      "CGPA: 2.89/4.0",
      "Member of Microsoft Student Associate (MSA), Microsoft Student Partner (MSP) programfor the year 2014- 2015"
    ]
  },
]

export default function () {
  return (
    <Container className="px-0 my_resume_educations" fluid>
      {/* <div className="my_resume_heading text-left mb-3">
        <span className="d-inline-block mx-0 mx-md-3">Educations</span>
      </div> */}
      {
        educations.map(
          (e, i) => {
            return <TimelineItem
              institution={e.college}
              location={e.location}
              role={e.degree}
              roleSub={e.major}
              dateTo={e.dateTo}
              datefrom={e.dateFrom}
              type="ed"
              className={i % 2 === 0 ? "left" : ""}
              key={i}
              icon="fa-graduation-cap"
              logo={e.logo}
            >
              {e.descriptions.length > 0 &&
                <ListGroup variant="flush" className="m-0 p-0 text-light">
                  {e.descriptions.map((d, j) => (<ListGroup.Item key={j}>{d}</ListGroup.Item>))}
                </ListGroup>}
            </TimelineItem>
          }
        )
      }
    </Container>
  );
}
