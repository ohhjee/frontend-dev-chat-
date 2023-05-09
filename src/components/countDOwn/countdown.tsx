import * as React from "react";
import { Headers } from "../Header";

export const Timer = (props) => {
  const { initMinute = 0, initSeconds = 0, initDay = 5 } = props;
  const [Days, setDays] = React.useState(initDay);
  const [minutes, setMinutes] = React.useState(initMinute);
  const [seconds, setSeconds] = React.useState(initSeconds);

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <React.Fragment>
      <div className="wrapper">
        {Days === 0 && minutes === 0 && seconds === 0 ? (
          <React.Fragment>
            <Headers />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1>
              {Days < 5 ? `0${Days}` : Days}:
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
