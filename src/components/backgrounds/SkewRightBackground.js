import * as React from "react";

function SkewRightBackground({
  startColor = "#828282",
  endColor = "#D7D7D7",
  preserveAspectRatio = "none",
  ...rest
}) {
  return (
    <svg
      width={1152}
      height={230}
      fill="none"
      {...rest}
      preserveAspectRatio={preserveAspectRatio}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0l1152 230V230H0V0z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={0}
          y1={130}
          x2={1152}
          y2={259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={startColor} stopOpacity={0.12} />
          <stop offset={1} stopColor={endColor} stopOpacity={0.25} />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoSkewRightBackground = React.memo(SkewRightBackground);
export default MemoSkewRightBackground;
