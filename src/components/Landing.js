import React, { Fragment } from "react";
import LandingBackground from './LandingBackground';


export function TitleDetail({ name = "Mohammed Asif", title = "Full stack web developer" }) {
  return (
    <div class="title d-flex text-light flex-column justify-content-start">

      <div className="name-intro"><span>hello! i'm,</span><span className="name"> {name}</span></div>
      <div className="designation">{title}</div>
    </div>)
}

export default () => {
  return (
    <Fragment>
      <div class="container-fluid landing p-0 m-0 ">
        <LandingBackground>
          <div style={{ backgroundImage: "url('/svg-assets/man.svg')" }} />
        </LandingBackground>
        <TitleDetail />
      </div>
    </Fragment>
  );
};
