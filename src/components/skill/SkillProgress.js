import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

export default function ({
  percentage = 0,
  pathColor = "#C03D04",
  textColor = "#282828",
  trailColor = "black",
  backgroundColor = "rgba(0,0,0,0)"
}) {
  return (
    <div className="progress__container">
      <ProgressProvider valueStart={0} valueEnd={percentage}>
        {(value) => (
          <CircularProgressbar
            value={value}
            counterClockwise
            text={`${value}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "rounded",

              // Text size
              textSize: "16px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 1,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: pathColor,
              textColor: textColor,
              trailColor: trailColor,
              backgroundColor: backgroundColor
            })}
          />
        )}
      </ProgressProvider>
    </div>
  );
}
