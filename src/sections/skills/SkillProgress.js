import React, { memo } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import Icon from "../../components/Icon";
import "./skill-progress.scss";

export default memo(function ({ label, progress = 0 }) {
  return (
    <Container fluid className="skill_progress">
      <div className="skill_progress_info">
        <div className="skill_progress_info_label">{label}</div>
        <div className="skill_progress_info_value">{progress}&nbsp;%</div>
      </div>
      <ProgressBar
        className="skill_progress_bar"
        now={progress}
        label={`l${label} ${progress}%`}
        srOnly
      />
    </Container>
  );
});
