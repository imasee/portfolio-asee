import React from "react";

export default function ({ className, type = "fas", icon = "", fontSize = "1.5rem" }) {
  return (
    <div className={["d-inline", className].join(" ")}>
      <i className={[type, icon].join(" ")} style={{ fontSize: fontSize }}></i>
    </div>
  );
}
