import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MainScreenComp from "../../components/mainScreenComp";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Routes } from "../../router/routes";
import { useHistory } from "react-router";
import { LocalStorageKeys } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  resultContent: {
    padding: 50,
    backgroundColor: "white",
    display: "inline-flex",
    maxWidth: "80%",
    "& .CircularProgressbar .CircularProgressbar-path": {
      stroke: "#2B7DF7",
    },
  },
  scribbleGrid: {
    border: "0.816626px solid rgba(182, 182, 182, 0.5)",
    padding: 20,
    borderRadius: "4px",
    marginTop: 30,
  },
  percentTitle: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  buttonGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    "& .MuiButton-outlined": {
      color: "#2B7DF7",
      borderColor: "#2B7DF7",
    },
  },
}));

const ResultPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const results = history?.location?.results;
  const [correct, setCorrect] = useState(0);
  const [incorrect, setInCorrect] = useState(0);
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [m, s] = history?.location?.timeTaken;

  useEffect(() => {
    var value = results?.filter((val) => val === true).length;
    setScore(value * 2);
    setSkipped(((5 - results?.length) / 5) * 100);
    setInCorrect(
      results?.length === 0
        ? 0
        : ((results?.length - value) / results?.length) * 100
    );
    setCorrect(100 - ((5 - value) / 5) * 100);
    console.log((results?.length - value) / results?.length);
  }, [results]);

  const redirectToLogIn = () => {
    localStorage.setItem(LocalStorageKeys.authToken, "");
    history.push(Routes.signIn);
  };
  console.log(score);
  console.log(history?.location?.timeTaken);
  console.log(
    results?.length === 0 ? 0 : ((results?.length - 0) / results?.length) * 100
  );
  console.log(results);

  return (
    <>
      <MainScreenComp>
        <div className={classes.body}>
          <Grid container className={classes.resultContent}>
            <Grid item xs={2}>
              <Typography>
                Score : <b>{score} / 10</b>
              </Typography>
              <Typography>
                Time Taken:{" "}
                <b>
                  {`${(4 - m).toString().padStart(2, "0")}:${
                    s
                      ? (60 - s).toString().padStart(2, "0")
                      : s.toString().padStart(2, "0")
                  }`}
                </b>
              </Typography>
              <Typography variant="h4">{(score / 10) * 100}%</Typography>
              <Typography variant="h6">Total Score</Typography>
            </Grid>
            <Grid item xs={10}>
              <Grid container justify="space-between">
                <Grid item>
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar value={correct} text={correct + "%"} />
                  </div>
                  <Typography className={classes.percentTitle}>
                    Correct
                  </Typography>
                </Grid>
                <Grid item>
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar
                      value={incorrect}
                      text={incorrect + "%"}
                      backgroundColor="red"
                    />
                  </div>
                  <Typography className={classes.percentTitle}>
                    Wrong
                  </Typography>
                </Grid>
                <Grid item>
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar
                      value={100 - skipped}
                      text={100 - skipped + "%"}
                    />
                  </div>
                  <Typography className={classes.percentTitle}>
                    Attempted
                  </Typography>
                </Grid>
                <Grid item>
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar value={skipped} text={skipped + "%"} />
                  </div>
                  <Typography className={classes.percentTitle}>
                    Skipped
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.scribbleGrid}>
              <Typography variant="h6">Your Scribble Notes:</Typography>
              <Typography variant="p">
                {history?.location?.notes ? (
                  history?.location?.notes
                ) : (
                  <span style={{ opacity: 0.5 }}>No Records found</span>
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.buttonGrid}>
              <Button
                variant="outlined"
                className={classes.button}
                onClick={() => redirectToLogIn()}
              >
                Exit
              </Button>
            </Grid>
          </Grid>
        </div>
      </MainScreenComp>
    </>
  );
};

export default ResultPage;
