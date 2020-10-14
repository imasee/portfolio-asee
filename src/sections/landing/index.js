import React from "react";
import { Container } from "react-bootstrap";
import LandingBg from '../../components/backgrounds/LandingBg';
import "./index.scss";
import NameIntro from "./NameIntro";
import withScrollElement from '../../hoc/withScrollElement';


export default withScrollElement(function ({ firstName, lastName, description }) {

  return (
    <Container className="landing" fluid>
      <LandingBg className="landing_vector" />
      <NameIntro
        firstName={firstName}
        lastName={lastName}
        description={description} />
    </Container>
  );
});
