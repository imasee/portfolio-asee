import React from "react";
import { Button, Container } from "react-bootstrap";
import Icon from "../../components/Icon";
import "./index.scss";
import Fade from 'react-reveal/Fade';

export default function () {
  return (
    <Container className="name__intro" fluid>
      <div className="name__intro_info">
        <span className="name__intro_info-greeting">i'm</span>
        <span className="name__intro_info-name text-right text-uppercase">
          <Fade delay={500} duration={2000}>
            <span className="d-block d-sm-inline-block">mohammed</span>
            <span className="d-block d-sm-inline-block">asif</span>
          </Fade>
        </span>
        <Fade top delay={1000} distance=".2em">
          <span className="name__intro_info-designation mb-3 text-uppercase">
            i develop web applications
        </span>
        </Fade>
        <Fade delay={2000}>
          <Button type="button" variant="default" className="btn">
            <span className="d-inline-block mr-2">Download Resume</span>
            <Icon
              className="pr-2 download"
              icon="fa-file-download"
              fontSize=".9rem"
            />
          </Button>
        </Fade>
      </div>
    </Container>
  );
}
