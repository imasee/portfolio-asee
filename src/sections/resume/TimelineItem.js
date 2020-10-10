import React from "react";
import { Container } from "react-bootstrap";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Icon from "../../components/Icon";
import "./timeline-item.scss";

const EdDuration = ({ from, to }) => (
  <div className="ed_duration">
    <span className="ed_duration_from">{from}</span>
    <span className="ed_duration_to">{to}</span>
  </div>
);

const EdTitle = ({ institution, location }) => (
  <div className="ed_title">
    <span className="ed_title_institution">{institution}</span>
    <span className="ed_title_location">{location}</span>
  </div>
);

const EdCourse = ({ degree, major }) => (
  <div className="ed_course">
    <span className="ed_course_degree">
      Degree:<span>{degree}</span>
    </span>
    <span className="ed_course_major">
      Major:<span>{major}</span>
    </span>
  </div>
);

export default function () {
  return (
    <Container className="timeline_item">
      <Timeline lineStyle={{ width: "1px" }}>
        <TimelineEvent
          className="timeline_item_content rounded"
          container="card"
          collapsible
          title={<EdTitle institution="Humber College" location="Toronto,On" />}
          subtitle={
            <EdCourse
              degree="Postgraduate Diploma"
              major="Information Tecchnology Solutions"
            />
          }
          bubbleStyle={{
            padding: "1rem",
            border: "1px solid rgba(200,200,200,.5)",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0px 1px 16px rgba(200,200,200,.6)"
          }}
          createdAt={<EdDuration to="2018" />}
          icon={<Icon icon="fa-university" fontSize=".8rem" />}
        ></TimelineEvent>
      </Timeline>
    </Container>
  );
}
