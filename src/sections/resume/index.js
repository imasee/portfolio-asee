import React from "react";
import { Col, Row } from "react-bootstrap";
import Section from "../../components/section";
import Educations from "./Educations";
import Experiences from "./Experiences";
import "./index.scss";

export default function () {
  return (
    <Section className="my_resume" headingFirst="My" headingSecond="Resume">
      <Row className="w-100 m-0">
        <Col xs={12} className="px-0 mr-md-auto" md={6}>
          <Educations />
        </Col>
      </Row>

      <Row className="w-100 m-0">
        <Col xs={12} className="px-0 ml-md-auto" md={6}>
          <Experiences />
        </Col>
      </Row>
    </Section>
  );
}
