import React from "react";
import Progress from "./SkillProgress";
import "./skill.scss";

export default function ({
  heading = "",
  details = "",
  percentage = 0
}) {
  return (
    <div className="skill__container">
      <Progress percentage={percentage} textColor="#fff" trailColor="#383a3c" pathColor="rgb(111 189 175)" />
      <div className="skill__header">{heading}</div>
      <div className="skill__details truncate-rows-3">{details}</div>
    </div>
  );
}
