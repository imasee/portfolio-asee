import React, { Fragment } from "react";
import SocialMediaLinks from "./SocialMediaLinks";

export default () => {
  return (
    <Fragment>
      <header class="container-fluid p-0 m-0 ">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "https://i.picsum.photos/id/113/4168/2464.jpg?hmac=p1FqJDS9KHL70UWqUjlYPhJKBdiNOI_CIH0Qo-74_fU"
          }}
        />

        <SocialMediaLinks className="text-primary" />
      </header>
    </Fragment>
  );
};
