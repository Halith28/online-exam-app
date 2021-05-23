import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Routes } from "../../router/routes";

const CountDown = ({ hours = 0, minutes = 0, seconds = 0, data, getTime }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
  const history = useHistory();

  const tick = () => {
    if (paused || over) return;
    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
      history.push({
        pathname: Routes?.results,
        results: data?.results,
        notes: data?.notes,
      });
      //   history.push(Routes?.results);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  //   const reset = () => {
  //     setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  //     setPaused(false);
  //     setOver(false);
  //   };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  useEffect(() => {
    getTime([m, s]);
    // eslint-disable-next-line
  }, [m, s]);

  return (
    <div>
      <h3>{`${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`}</h3>
      <div>{over ? "Time's up!" : ""}</div>
      {/* <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
      <button onClick={() => reset()}>Restart</button> */}
    </div>
  );
};

export default CountDown;
