import * as React from "react";

function SkewLeftBackground({
  startColor = "#D7D7D7",
  endColor = "#828282",
  preserveAspectRatio = "none",
  ...rest
}) {
  return (
    <svg
      width={"100%"}
      height={230}
      fill="none"
      {...rest}
      preserveAspectRatio={preserveAspectRatio}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1152 230L0 10.5V0h1152v230z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={1152}
          y1={48.676}
          x2={3.5}
          y2={48.676}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={startColor} stopOpacity={0.25} />
          <stop offset={1} stopColor={endColor} stopOpacity={0.12} />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoSkewLeftBackground = React.memo(SkewLeftBackground);
export default MemoSkewLeftBackground;
