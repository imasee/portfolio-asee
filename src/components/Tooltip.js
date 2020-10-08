import React, { memo } from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";

const renderTooltip = (text) => <span>{text}</span>;

export default function ({ children, title }) {
  return (
    <Tooltip
      placement="bottom"
      trigger="hover"
      mouseEnterDelay={0.4}
      overlay={<span>{title}</span>}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      {children}
    </Tooltip>
  );
}
