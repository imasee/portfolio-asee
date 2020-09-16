import React, { Fragment } from "react";
import SocialMediaLinks from "./SocialMediaLinks";


export function TitleDetail({ name = "Mohammed Asif", title = "Full stack web developer" }) {
  return (
    <div class="title d-flex text-light mr-auto text-left flex-column justify-content-start">
      <p>hi;</p>
      <div >i'm<span className="name"> {name}</span></div>
      <div className="designation">{title}</div>
    </div>)
}

export default () => {
  return (
    <Fragment>
      <header class="container-fluid page-head p-0 m-0 ">
        <div
          className="bg-image"
          style={{
            backgroundColor: "black",
            backgroundImage:
              'url("https://picsum.photos/id/117/1544/1024")'
          }}
        ></div>
        <TitleDetail />

        <SocialMediaLinks className="text-light" />
      </header>
    </Fragment>
  );
};
