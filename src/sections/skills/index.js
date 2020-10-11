import React, { memo } from "react";
import "./index.scss";
import { Row, Col } from "react-bootstrap";
import Section from "../../components/section";
// import SkewLeftBackground from "../../components/backgrounds/SkewLeftBackGround";
import AllSkills from "./AllSkills";
import TopSkills from "./TopSkills";

export default memo(function () {
  return (
    <Section className="my-skills" headingFirst="My" headingSecond="Skills">
      {/* <SkewLeftBackground
        className="skewed-left-top"
        preserveAspectRatio="none"
      /> */}

      <div className="my-skills_wrapper">
        <Row className="w-100 mx-0 d-flex flex-column flex-md-row">
          <Col sm={12} md className="px-0">
            <p className="my-skills-text text-center text-md-left pl-0 pr-0 pr-md-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dui
              ullamcorper, hendrerit dui ut, tristique urna. Sed ultricies ornare
              est at pulvinar..
        </p>
            <AllSkills />
          </Col>
          <Col sm={12} md className="px-0">
            <TopSkills />
          </Col>
        </Row>
      </div>
    </Section>
  );
});
