import React from "react";

export default ({ className }) => {
  return (
    <div class={[className, "social"].join(" ")}>
      <i class="fa fa-facebook-official mr-1 p-1"></i>
      <i class="fa fa-instagram mr-1 p-1"></i>
      <i class="fa fa-snapchat mr-1 p-1"></i>
      <i class="fa fa-pinterest-p mr-1 p-1"></i>
      <i class="fa fa-twitter mr-1 p-1"></i>
      <i class="fa fa-linkedin p-1"></i>
    </div>
  );
};
