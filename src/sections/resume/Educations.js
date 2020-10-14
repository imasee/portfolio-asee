import React from "react";
import { Container } from "react-bootstrap";
import { userResumeFallback } from '../../utils/fallbackData';
import TimelineItem from "./TimelineItem";


export default function ({ data = [] }) {
  return (
    <Container className="px-0 my_resume_educations" fluid>
      {/* <div className="my_resume_heading text-left mb-3">
        <span className="d-inline-block mx-0 mx-md-3">Educations</span>
      </div> */}
      {
        userResumeFallback.educations.map(
          (e, i) => {
            return <TimelineItem
              institution={e.institution}
              location={e.location}
              role={e.degree}
              roleSub={e.major}
              dateTo={e.duration.to.year}
              datefrom={e.duration.from.year}
              type="ed"
              className={i % 2 === 0 ? "left" : ""}
              key={i}
              icon="fa-graduation-cap"
              // logo={e.}
              delay={(i + 1.5) * 300}

            >
              {e.details.length > 0 &&
                <ul className="timeline_detail_list">
                  {e.details.map((d, j) => (
                    <li key={j} className="timeline_detail_list_item">
                      {d}
                    </li>
                  ))}
                </ul>}
            </TimelineItem>
          }
        )
      }
    </Container>
  );
}
