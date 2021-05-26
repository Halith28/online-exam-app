import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Routes } from "../../router/routes";

// this component will show timer which starts from 5:00 to 0:00
const CountDown = ({ hours = 0, minutes = 0, seconds = 0, data, getTime }) => {
  const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
  const history = useHistory();

  // tick function will be called for every second by using setInterval function
  const tick = () => {
    if (h === 0 && m === 0 && s === 0) {
      history.push({
        pathname: Routes?.results,
        results: data?.results,
        notes: data?.notes,
        timeTaken: [m, s],
      });
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  // this effect executes setInterval and clearInterval functions
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  // this useEffect will be executed for every [m,s] state changes
  // getTime function is a props function which values will send back to its parent(Home) component
  useEffect(() => {
    getTime([m, s]);
    // eslint-disable-next-line
  }, [m, s]);

  return (
    <Grid>
      <h3>{`${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`}</h3>
    </Grid>
  );
};

export default CountDown;
