import React, { useState } from "react";
import {
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Button,
} from "@material-ui/core";
import MainScreenComp from "../../components/mainScreenComp";
import DataJson from "../../assets/sampleData.json";
import { Routes } from "../../router/routes";
import { useHistory } from "react-router";
import CountDown from "../../components/countDownTimer";
import WarningModal from "../../components/warningModal";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 25,
    height: "100%",
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
  const historyData = history?.location;
  const [Index, setIndex] = useState(0);
  const questionLimit = 5;
  const [addModal, setAddModal] = useState(false);
  const [state, setState] = useState({
    results: [],
    checked: {
      radio_0: 9258,
    },
    notes: "",
  });
  const sortedArray = DataJson.filter(
    (val, index) => val.category === historyData?.examCategory
  );
  const [time, getTime] = useState();

  const gotoNextQuestion = () => {
    if (Index < 4) {
      setIndex(Index + 1);
    } else {
      addModalOpen();
    }
  };

  const gotoPreviousQuestion = () => {
    if (Index > 0) {
      setIndex(Index - 1);
    } else {
      addModalOpen();
    }
  };

  const handleChange = (e, index) => {
    debugger;
    var value = sortedArray[index]?.correct_option === parseInt(e.target.value);
    setState((prevState) => ({
      ...prevState,
      ...(prevState.results[index] = value),
      checked: {
        ...prevState.checked,
        [e.target.name]: parseInt(e.target.value),
      },
    }));
    if (e.target.name === "notes") {
      setState((prevState) => ({
        ...prevState,
        notes: e.target.value,
      }));
    }
  };

  const addModalOpen = () => {
    setAddModal(true);
  };

  const addModalClose = () => {
    setAddModal(false);
  };
  const Continue = () => {
    if (Index > 0) {
      history.push({
        pathname: Routes?.results,
        results: state?.results,
        notes: state?.notes,
        timeTaken: time,
        examCategory: historyData?.examCategory,
      });
    } else {
      setTimeout(() => {
        localStorage.clear();
        // localStorage.removeItem(LocalStorageKeys.authToken);
        history.push(Routes?.signIn);
      }, 1000);
    }
  };

  console.log(sortedArray);
  console.log(DataJson);
  console.log(state);
  console.log(time);
  console.log(historyData?.examCategory);
  //   console.log(state.checked["checkbox_1"][0]);
  return (
    <Grid>
      <MainScreenComp>
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.timer}>
            {/* <Typography>04:59</Typography> */}
            <CountDown
              hours={0}
              minutes={5}
              seconds={0}
              data={state}
              getTime={getTime}
            />
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
              <Typography variant="h6" onClick={addModalOpen}>
                {sortedArray[Index]?.question}
              </Typography>
              {/* <FormGroup column>
                {sortedArray[Index]?.options.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        // checked={state?.checked["checkbox_0"][index]}
                        onChange={(e) => handleChange(e, item?.id, Index)}
                        name={`checkbox_${Index}`}
                        color="primary"
                      />
                    }
                    label={item?.value}
                  />
                ))}
              </FormGroup> */}
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="options"
                  name={`radio_${Index}`}
                  value={state?.checked[`radio_${Index}`] ?? 0}
                  onChange={(e) => handleChange(e, Index)}
                >
                  {sortedArray[Index]?.options.map((item, index) => (
                    <FormControlLabel
                      value={item?.id}
                      control={<Radio />}
                      label={item?.value}
                    />
                  ))}
                </RadioGroup>
                {/* <FormLabel component="legend">Gender</FormLabel> */}
              </FormControl>
              <Grid className={classes.buttonGrid}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: 10 }}
                  onClick={gotoPreviousQuestion}
                >
                  {Index !== 0 ? "Back" : "Exit"}
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
                <TextField
                  name="notes"
                  value={state?.notes}
                  variant="outlined"
                  onChange={handleChange}
                  multiline
                  rows={13}
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </MainScreenComp>
      <WarningModal
        open={addModal}
        handleClose={addModalClose}
        header={"Add Product Inventory"}
        isTitle
        continue={Continue}
      />
    </Grid>
  );
};

export default HomePage;
