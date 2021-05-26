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
    padding: "15px 15px 30px 15px",
    height: "100%",
    overflowX: "hidden",
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#2B7DF7",
    },
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
  textField: {
    boxShadow: "0px 2px 6px #1e20271a",
    border: "2px solid #FFFFFF",
    borderRadius: "13px",
    opacity: 1,
  },
  textInput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#7070703D",
        border: "none",
      },
      "&:hover fieldset": {
        borderColor: "#4BCD3E",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4BCD3E",
      },
    },
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
    (val) => val.category === historyData?.examCategory
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
        history.push(Routes?.signIn);
      }, 1000);
    }
  };

  return (
    <Grid>
      <MainScreenComp>
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.timer}>
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
              <Typography variant="h6">
                {sortedArray[Index]?.question}
              </Typography>

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
              <div
                className={`${classes.notePadSection} ${classes.textField} `}
              >
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
                  disableunderline="true"
                  className={classes.textInput}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </MainScreenComp>
      {addModal && (
        <WarningModal
          open={addModal}
          handleClose={addModalClose}
          header={"Add Product Inventory"}
          isTitle
          continue={Continue}
          Index={Index}
        />
      )}
    </Grid>
  );
};

export default HomePage;
