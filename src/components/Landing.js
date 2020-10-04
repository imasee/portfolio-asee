import React, { Fragment } from "react";

export function TitleDetail({ name = "Mohammed Asif", title = "Full stack web developer" }) {
  return (
    <div className="title d-flex text-light flex-column justify-content-start">

      <div className="name-intro"><span>hello! i'm,</span><span className="name"> {name}</span></div>
      <div className="designation">{title}</div>
    </div>)
}

export default () => {
  return (
    <Fragment>
      <div className="container-fluid landing p-0 m-0 ">
        <img src={'/svg-assets/landing.svg'} alt="Landing Svg background" className="landing-bg" width="100%" height="100%" />
        <TitleDetail />
      </div>
    </Fragment>
  );
};
