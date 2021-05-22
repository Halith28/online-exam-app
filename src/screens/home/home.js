import React, { useState } from "react";
import {
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import MainScreenComp from "../../components/mainScreenComp";
import DataJson from "../../assets/sampleData.json";
import { Routes } from "../../router/routes";
import { useHistory } from "react-router";
import CountDown from "../../components/countDownTimer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 25,
  },
  timer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  questionSection: {
    padding: "0px 35px",
  },
  notePadSection: {
    backgroundColor: "white",
  },
  buttonGrid: {
    marginTop: 20,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [Index, setIndex] = useState(0);
  const questionLimit = 5;
  const sortedArray = DataJson.filter(
    (val, index) => val.category === "physics"
  );

  const gotoNextQuestion = () => {
    if (Index < 4) {
      setIndex(Index + 1);
    } else {
      history.push(Routes?.results);
    }
  };

  const gotoPreviousQuestion = () => {
    if (Index > 0) {
      setIndex(Index - 1);
    } else {
      history.push(Routes?.signUp);
    }
  };

  console.log(sortedArray);
  console.log(DataJson);
  return (
    <Grid>
      <MainScreenComp>
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.timer}>
            {/* <Typography>04:59</Typography> */}
            <CountDown hours={0} minutes={5} seconds={10} />
          </Grid>
          <Grid
            container
            className={classes.questionSection}
            direction="row"
            justify="center"
            spacing={6}
          >
            <Grid item xs={6}>
              <Typography style={{ marginBottom: 20 }}>
                Question {Index + 1} of {questionLimit}
              </Typography>
              <Typography variant="h6">
                {sortedArray[Index]?.question}
              </Typography>
              <FormGroup column>
                {sortedArray[Index]?.options.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label={item?.value}
                  />
                ))}
              </FormGroup>
              <Grid className={classes.buttonGrid}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: 10 }}
                  onClick={gotoPreviousQuestion}
                >
                  {Index != 0 ? "Back" : "Exit"}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={gotoNextQuestion}
                >
                  {Index < 4 ? "Next" : "Submit"}
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.notePadSection}>
                <Grid style={{ padding: 10 }}>
                  <Typography>NotePad</Typography>
                </Grid>
                <Divider />
                <TextField variant="outlined" multiline rows={13} fullWidth />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </MainScreenComp>
    </Grid>
  );
};

export default HomePage;
