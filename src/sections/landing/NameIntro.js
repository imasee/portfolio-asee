import React from "react";
import "./index.scss";
import Icon from "../../components/Icon";
import { Container, Badge, Button } from "react-bootstrap";

export default function () {
  return (
    <Container className="name__intro" fluid>
      <div className="name__intro_info">
        <span className="name__intro_info-greeting">i'm</span>
        <span className="name__intro_info-name text-left">
          <span className="d-block d-sm-inline-block">mohammed</span>
          <span className="d-block d-sm-inline-block">asif</span>
        </span>
        <span className="name__intro_info-designation mb-3">
          i develop web applications
        </span>
        <Badge pill variant="light" className="name__intro_info-btn mt-3">
          <Icon
            className="pl-2 download"
            icon="fa-file-download"
            fontSize="1.3rem"
          />
          <Button type="button" className="btn">
            Download Resume
          </Button>
        </Badge>
      </div>
    </Container>
  );
}
