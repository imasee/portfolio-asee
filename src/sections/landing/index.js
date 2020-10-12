import React from "react";
import { Container } from "react-bootstrap";
import LandingBg from '../../components/backgrounds/LandingBg';
import "./index.scss";
import NameIntro from "./NameIntro";


export default function () {
  return (
    <Container className="landing" fluid>
      <LandingBg className="landing_vector" />
      <NameIntro />
    </Container>
  );
}
