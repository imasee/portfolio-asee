import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import Section from "../../components/section";
import Educations from "./Educations";
import Experiences from "./Experiences";
import "./index.scss";
import withScrollElement from '../../hoc/withScrollElement';


export default withScrollElement(memo(function ({ educations, experiences }) {
  return (
    <Section className="my_resume" headingFirst="My" headingSecond="Resume">
      <Row className="w-100 m-0">
        <Col xs={12} className="px-0 mx-0 ml-md-auto" md={6}>
          <Experiences data={experiences} />
        </Col>
      </Row>
      <Row className="w-100 m-0">
        <Col xs={12} className="px-0 mx-0 ml-md-auto" md={6}>
          <Educations data={educations} />
        </Col>
      </Row>
      <Row className="w-100 m-0">
        {/* <Button>
          Download Resume
        </Button> */}
      </Row>

    </Section>
  );
}));
