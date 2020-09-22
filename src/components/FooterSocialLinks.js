import React from "react";

export default ({ className }) => {
  return (
    <div className={[className, "social"].join(" ")}>
      <i className="fa fa-facebook-official dim mr-1 p-1"></i>
      <i className="fa fa-instagram mr-1 dim p-1"></i>
      <i className="fa fa-linkedin dim p-1"></i>
    </div>
  );
};
