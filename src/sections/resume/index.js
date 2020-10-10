import React from "react";
import "./index.scss";
import Section from "../../components/section";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Icon from "../../components/Icon";
import Educations from "./Educations";
import Experiences from "./Experiences";

export default function () {
  return (
    <Section className="my_resume" headingFirst="My" headingSecond="Resume">
      <Educations />
      {/* <Timeline></Timeline> */}
    </Section>
  );
}
