import React from "react";
import "./index.scss";
import Section from "../../components/section";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Icon from "../../components/Icon";
import { Row, Col } from "react-bootstrap";
import Educations from "./Educations";
import Experiences from "./Experiences";

export default function () {
  return (
    <Section className="my_resume" headingFirst="My" headingSecond="Resume">
      <Row className="w-100 m-0">
        <Col xs={12} className="px-0 mr-md-auto" md={7}>
          <Educations />
        </Col>
      </Row>

      <Row className="w-100 m-0">
        <Col xs={12} className="px-0 ml-md-auto" md={7}>
          <Experiences />
        </Col>
      </Row>
    </Section>
  );
}
