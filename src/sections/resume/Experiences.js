import React from "react";
import { Container } from "react-bootstrap";
import { userResumeFallback } from '../../utils/fallbackData';
import TimelineItem from "./TimelineItem";

export default function ({ data = [] }) {
  data = userResumeFallback.experiences;
  return (
    <Container className="p-0 my_resume_experiences my-0 pt-1" fluid>
      {/* <div className="my_resume_heading text-left mb-3">
        <span className="d-inline-block mx-0 mx-md-3">Experiences</span>
      </div> */}
      {
        userResumeFallback.experiences.map(
          (e, i) => {
            return <TimelineItem
              institution={e.institution}
              location={e.location}
              role={e.role}
              dateTo={"Present"}
              datefrom={e.duration.from.year}
              icon="fa-briefcase"
              key={i}
              delay={(i + 1) * 300}
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
