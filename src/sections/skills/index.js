import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { MemoFade as Fade } from '../../components/reveal-memoized';
import Section from "../../components/section";
// import SkewLeftBackground from "../../components/backgrounds/SkewLeftBackGround";
import AllSkills from "./AllSkills";
import "./index.scss";
import TopSkills from "./TopSkills";
import withScrollElement from '../../hoc/withScrollElement';


export default withScrollElement(memo(function ({ allSkills, topSkills, summary }) {

  return (
    <Section className="my-skills" headingFirst="My" headingSecond="Skills">
      {/* <SkewLeftBackground
        className="skewed-left-top"
        preserveAspectRatio="none"
      /> */}
      <Fade distance=".6em" left >
        <div className="my-skills_wrapper">
          <Row className="w-100 mx-0 d-flex flex-column flex-md-row">
            <Col sm={12} md className="px-0">
              {/* <p className="my-skills-text text-center text-md-left pl-0 pr-0 pr-md-5">
                {summary}
              </p> */}

              <AllSkills data={allSkills} />
            </Col>
            <Col sm={12} md className="px-0">
              <TopSkills data={topSkills} />
            </Col>
          </Row>
        </div>
      </Fade>
    </Section >
  );
}));
