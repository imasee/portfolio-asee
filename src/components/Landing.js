import React, { Fragment } from "react";
import SocialMediaLinks from "./SocialMediaLinks";


export function TitleDetail({ name = "Mohammed Asif", title = "And I build Websites." }) {
  return (
    <div class="title d-flex text-light m-auto text-center flex-column justify-content-start">

      <div className="name-intro"><span>hello, i am</span><span className="name"> {name}</span></div>
      <div className="designation">{title}</div>
    </div>)
}

export default () => {
  return (
    <Fragment>
      <div class="container-fluid landing p-0 m-0 ">
        <div
          className="bg-image"
          style={{
            backgroundColor: "black",
            backgroundImage:
              'url("https://i.picsum.photos/id/401/5184/3456.jpg?hmac=LKgO9S9F8tAPIt-FSy9vE6om5Xs205kTrZ9mqR1cVq4")'
          }}
        ></div>
        <TitleDetail />
        <SocialMediaLinks />
      </div>
    </Fragment>
  );
};
