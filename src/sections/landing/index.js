import React from "react";
import "./index.scss";
import NameIntro from "./NameIntro";
import { Container } from "react-bootstrap";
import LandingBg from '../../components/backgrounds/LandingBg';

export default function () {
  return (
    <Container className="landing" fluid>
      <LandingBg className="landing_vector" />
      <NameIntro />
    </Container>
  );
}
