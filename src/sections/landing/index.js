import React from "react";
import "./index.scss";
import NameIntro from "./NameIntro";
import { Container } from "react-bootstrap";

export default function () {
  return (
    <Container className="landing" fluid>
      {/* <Image src="/assets/bg/landing.svg" className="landing__bg" fluid /> */}
      <div className="landing-skew"></div>
      <NameIntro />
    </Container>
  );
}
