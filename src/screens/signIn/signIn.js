import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Grid,
  InputAdornment,
  IconButton,
  makeStyles,
  TextField,
  Typography,
  Paper,
  MenuItem,
  InputLabel,
  FormLabel,
  Select,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
import { LocalStorageKeys } from "../../utils/constants";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { AlertContext } from "../../contexts";
import { AlertProps } from "../../utils/constants";
import { Routes } from "../../router/routes";
import signInPic from "../../assets/Frame1680.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#fff !important",
  },
  header: {
    display: "flex",
    margin: "20px",
  },
  body: {
    // maxWidth: "500px",
    // width: "350px",
    padding: "50px",
    margin: "20px",
    // width: "100%",
    // boxShadow:
    //   "0px 2px 2px rgb(0 0 0 / 14%), 0px 3px 1px rgb(0 0 0 / 12%), 0px 1px 5px rgb(0 0 0 / 20%)",
    background: "#FFFFFF",
    boxShadow: "0px 6px 60px rgba(0, 0, 0, 0.08)",
    borderRadius: "20px",
    "& .MuiFormControl-root": {
      //   padding: "15px 0px",
      // marginTop: "16px",
      marginBottom: "16px",
    },
  },
  button: {
    textTransform: "capitalize",
    backgroundColor: "#2B7DF7",
    color: "white",
    borderRadius: "8.75px",
  },
  buttonGrid: {
    margin: "15px 0px",
    display: "flex",
    justifyContent: "center",
  },
  signUp: {
    textAlign: "center",
  },
  input: {
    "&:invalid": {
      border: "#f44336 solid 1px",
      borderRadius: "inherit",
    },
  },
  content: {
    // height: "400px",
    // maxWidth: "400px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
  loginTitle: {
    marginBottom: 20,
  },
}));

const SignInPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    examCategory: "",
    isLoggingIn: false,
    error: {},
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  // const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const alert = useContext(AlertContext);

  const validation = () => {
    if (state?.email?.length === 0 && state?.password?.length === 0) {
      alert.setSnack({
        ...alert,
        open: true,
        severity: AlertProps.severity.error,
        msg: "Please fill the required fields",
        vertical: AlertProps.vertical.top,
        horizontal: AlertProps.horizontal.center,
      });
    } else if (state?.email?.length === 0 || state?.password?.length === 0) {
      state.error = {
        email:
          state?.email?.length === 0 ||
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email) ===
            false
            ? true
            : false,
        password: state?.password?.length === 0 ? true : false,
      };
      setState({ ...state });
      return false;
    } else if (state?.email.length > 0 || state?.password?.length > 0) {
      state.error = {
        ...state.error,
        email:
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email) ===
          false
            ? true
            : false,
      };
      setState({ ...state });
      return true;
    } else {
      state.error = {
        email: false,
        password: false,
      };
      return true;
    }
  };

  console.log(state?.email?.length);

  const submitForm = () => {
    debugger;
    const params = {
      email: state.email,
      password: state.password,
    };
    if (validation()) {
      //   if (!state?.error?.email && !state?.error?.password) {
      //     axios
      //       .post(`https://dev.prodkt.co/backend/Keycloak/Signin`, params)
      //       .then((res) => {
      //         debugger;
      //         if (res.status === 200) {
      //           state.email = "";
      //           state.password = "";
      //           state.isLoggingIn = true;
      //           setTimeout(() => {
      //             localStorage.setItem(LocalStorageKeys.authToken, "token");
      //             localStorage.setItem(
      //               "BusinessProfileID",
      //               res?.data?.userdetails?.ID
      //             );
      //             localStorage.setItem(
      //               "BusinessPartnerID",
      //               res?.data?.userdetails?.BusinessPartnerID
      //             );
      //             // history.push("/home");
      //             if (history?.location?.state?.from?.pathname) {
      //               history.push(history.location.state.from.pathname);
      //             } else {
      //               history.push(Routes.home);
      //             }
      //           }, 1000);
      //           setState({ ...state });
      //         } else {
      //           alert.setSnack({
      //             ...alert,
      //             open: true,
      //             severity: AlertProps.severity.error,
      //             msg: "Please fill the required fields",
      //             vertical: AlertProps.vertical.top,
      //             horizontal: AlertProps.horizontal.center,
      //           });
      //         }
      //       })
      //       .catch((error) => {
      //         console.log({ error });
      //         alert.setSnack({
      //           ...alert,
      //           open: true,
      //           severity: AlertProps.severity.error,
      //           msg: "Invalid Email or Password",
      //           vertical: AlertProps.vertical.top,
      //           horizontal: AlertProps.horizontal.center,
      //         });
      //       });
      //   }
      if (history?.location?.state?.from?.pathname) {
        history.push(history.location.state.from.pathname);
      } else {
        history.push(Routes.home);
        localStorage.setItem("ExamCategory", state?.examCategory);
      }
    }
  };

  const handleChange1 = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      error: { ...state.error, [event.target.name]: false },
    });
  };

  //   const handleChange2 = (event) => {
  //     setState({
  //       ...state,
  //       password: event.target.value,
  //       error: { ...state.error, password: false },
  //     });
  //   };

  useEffect(() => {
    if (localStorage.getItem(LocalStorageKeys.authToken)) {
      history.push(Routes.home);
    } else {
      history.push(Routes.signIn);
    }
  }, [history]);

  console.log(state);

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid
        item
        xs={6}
        style={{
          backgroundImage: `url(${signInPic})`,
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        {/* <img src={signUpPic} alt="SignUpPage" height="100%" width="100%" /> */}
      </Grid>
      <Grid item xs={6}>
        <div className={classes.content}>
          <Paper className={classes.body}>
            <Typography variant="h5" className={classes.loginTitle}>
              User Sign in
            </Typography>
            <Typography variant="subtitle1">Your Email</Typography>
            <TextField
              name="email"
              variant="standard"
              color="primary"
              fullWidth
              placeholder="Email Address"
              onChange={handleChange1}
              error={state?.error?.email ?? false}
              helperText={
                state?.error?.email && (
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    style={{ color: "red" }}
                  >
                    Enter the valid email address
                  </Typography>
                )
              }
            />
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              name="password"
              variant="standard"
              fullWidth
              placeholder="Password"
              onChange={handleChange1}
              type={showPassword ? "text" : "password"}
              error={state?.error?.password ?? false}
              helperText={
                state?.error?.password && (
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    style={{ color: "red" }}
                  >
                    Enter the valid password
                  </Typography>
                )
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseOver={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Typography variant="subtitle1">Exam Category</Typography>
            <FormControl
              name="examCategory"
              value={state?.examCategory}
              variant="standard"
              className={classes.formControl}
              error={state?.error?.insurance}
              fullWidth
            >
              {/* <InputLabel id="demo-simple-select-outlined-label">
                Exam Category
              </InputLabel> */}
              <Select
                name="examCategory"
                value={state?.insurance}
                onChange={handleChange1}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"physics"}>Physics</MenuItem>
                <MenuItem value={"chemistry"}>Chemistry</MenuItem>
                <MenuItem value={"science"}>Science</MenuItem>
              </Select>
              {state?.error?.insurance && (
                <FormHelperText>This is required!</FormHelperText>
              )}
            </FormControl>
            <Typography variant="subtitle2">
              <Link className={classes.link} to="/resetPassword">
                Reset/Forgot your password?
              </Link>
            </Typography>
            <Grid className={classes.buttonGrid}>
              <Button
                className={classes.button}
                variant="contained"
                onClick={() => submitForm()}
                // onClick={() => history.push(Routes.home)}
                fullWidth
              >
                {`${state.isLoggingIn ? "Logging In..." : "Log In"}`}
              </Button>
            </Grid>
            {/* <Grid className={classes.buttonGrid}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => submitForm()}
              >
                {`${state.isLoggingIn ? "Logging In..." : "Log In"}`}
              </Button>
            </Grid> */}
            <Typography variant="subtitle2" className={classes.signUp}>
              Don't have an account?{" "}
              <Link className={classes.link} to="/signup">
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
