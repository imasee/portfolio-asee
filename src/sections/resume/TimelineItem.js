import React from "react";
import { Container } from "react-bootstrap";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Icon from "../../components/Icon";
import "./timeline-item.scss";

const EdDuration = ({ from, to }) => (
  <div className="ed_duration">
    <span className="ed_duration_from">{from}</span>
    <span className="ed_duration_to">{to ? to : "In Progress"}</span>
  </div>
);

const EdTitle = ({ college, location }) => (
  <div className="ed_title">
    <span className="ed_title_college">{college}</span>
    <span className="ed_title_location">{location}</span>
  </div>
);

const EdCourse = ({ degree, major }) => (
  <div className="event_course">
    <span className="ed_course_degree">{degree}</span>
    <span className="ed_course_major">{major}</span>
  </div>
);

export default function () {
  return (
    <Container className="timeline_item">
      <Timeline>
        <TimelineEvent
          title="Humber College"
          subtitle="Postgraduate Diploma"
          iconStyle={{
            background: "transparent"
          }}
          titleStyle={{}}
          bubbleStyle={{
            // background: "transparent",
            padding: "1rem",
            border: "none",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0px 0px 10px rgba(60,60,60,.3)"
          }}
          iconColor="green"
          createdAt={<EdDuration from="2018" />}
          icon={<Icon icon="fa-university" fontSize=".8rem" />}
        >
          Like we talked, you said that you would share the shipment details?
          This is an urgent order and so I am losing patience. Can you expedite
          the process and pls do share the details asap. Consider this a gentle
          reminder if you are on track already!
        </TimelineEvent>

        <TimelineEvent
          title="You sent an email to John Doe"
          subtitle="hello there"
          className="timeline_item"
          iconStyle={{
            background: "transparent"
          }}
          titleStyle={{}}
          bubbleStyle={{
            // background: "transparent",
            padding: "1rem",
            border: "none",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0px 0px 10px rgba(60,60,60,.3)"
          }}
          iconColor="green"
          createdAt={<EdDuration from={2013} to={2016} />}
          icon={<Icon icon="fa-university" fontSize=".8rem" />}
        >
          Like we talked, you said that you would share the shipment details?
          This is an urgent order and so I am losing patience. Can you expedite
          the process and pls do share the details asap. Consider this a gentle
          reminder if you are on track already!
        </TimelineEvent>
      </Timeline>
    </Container>
  );
}
