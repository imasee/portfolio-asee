import React from "react";

export default function ({ className, icon = "", fontSize = "1.5rem" }) {
  return (
    <div className={["d-inline", className].join(" ")}>
      <i className={["fas", icon].join(" ")} style={{ fontSize: fontSize }}></i>
    </div>
  );
}
