import React from "react";
import { Avatar, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    margin: "20px",
    flexDirection: "row",
    "& .MuiTypography-h6": {
      fontSize: "1.052rem",
    },
  },
  subHeader1: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    width: "35%",
    [theme.breakpoints.down("xs")]: {
      marginRight: "5px",
    },
  },
  subHeader2: {
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    width: "65%",
    borderLeft: "2px solid black",
  },
  avatar: {
    alignSelf: "center",
  },
  textHeading: {
    marginLeft: "10px",
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5px",
    },
  },
}));

const LoginNamePlate = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <Grid className={classes.subHeader1}>
        <Avatar className={classes.avatar}>
          <img src={""} alt="online exam" height="60px" width="60px" />
        </Avatar>
        <Typography variant="h6" className={classes.textHeading}>
          Online Exam App
        </Typography>
      </Grid>
      <Grid className={classes.subHeader2}>
        <Avatar className={classes.avatar}>
          <img
            src={
              "https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/app-icons/app-nav-logo.svg"
            }
            alt="C"
          />
        </Avatar>
        <Typography variant="h6" className={classes.textHeading}>
          Choose My BiCycle
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginNamePlate;
