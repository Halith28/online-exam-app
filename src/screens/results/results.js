import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MainScreenComp from "../../components/mainScreenComp";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Routes } from "../../router/routes";
import { useHistory } from "react-router";

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
  return (
    <>
      <MainScreenComp>
        <div className={classes.body}>
          <Grid container className={classes.resultContent}>
            <Grid item xs={2}>
              <Typography>Score</Typography>
              <Typography>Time Taken:</Typography>
              <Typography variant="h4">80%</Typography>
              <Typography variant="h6">Total Score</Typography>
            </Grid>
            <Grid item xs={10}>
              <Grid container justify="space-between">
                <Grid item>
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar value={80} text={"80%"} />
                  </div>
                  <Typography className={classes.percentTitle}>
                    Final Score
                  </Typography>
                </Grid>
                <Grid item>
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar value={66} text={"66%"} />
                  </div>
                  <Typography className={classes.percentTitle}>
                    Correct
                  </Typography>
                </Grid>
                <Grid item>
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar
                      value={34}
                      text={"34%"}
                      backgroundColor="red"
                    />
                  </div>
                  <Typography className={classes.percentTitle}>
                    Wrong
                  </Typography>
                </Grid>
                <Grid item>
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar value={20} text={"20%"} />
                  </div>
                  <Typography className={classes.percentTitle}>
                    Skipped
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.scribbleGrid}>
              <Typography variant="h6">Your Scribble Notes:</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nisl vitae purus facilisi id. Blandit sagittis commodo, urna ut
                mattis vestibulum non. Vel sed scelerisque leo quis in mattis
                ultrices aliquam. Justo,Lorem ivp{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.buttonGrid}>
              <Button
                variant="outlined"
                className={classes.button}
                onClick={() => history.push(Routes.signIn)}
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
