import React from "react";
import "./index.scss";
import NameIntro from "./NameIntro";
import { Container, Image } from "react-bootstrap";

export default function () {
  return (
    <Container className="landing" fluid>
      <Image src="/assets/bg/landing.svg" className="landing__bg" fluid />
      <NameIntro />
    </Container>
  );
}
