import React from "react";

export default function ({ title = "" }) {
  return (
    <div className="heading__container">
      <h4 className="heading__text">{title}</h4>
    </div>
  );
}
