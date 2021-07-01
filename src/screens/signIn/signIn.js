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
  Select,
  FormControl,
} from "@material-ui/core";
import { LocalStorageKeys } from "../../utils/constants";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useHistory } from "react-router-dom";
import { AlertContext } from "../../contexts";
import { AlertProps } from "../../utils/constants";
import { Routes } from "../../router/routes";
import signInPic from "../../assets/Frame1680.png";

// SignIn page styles are mentioned here
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
    padding: "50px",
    width: "100%",
    background: "#FFFFFF",
    boxShadow: "0px 6px 60px rgba(0, 0, 0, 0.08)",
    borderRadius: "20px",
    "& .MuiFormControl-root": {
      marginBottom: "16px",
    },
  },
  button: {
    textTransform: "capitalize",
    backgroundColor: "#2B7DF7",
    color: "white",
    borderRadius: "8.75px",
    "&:hover": {
      backgroundColor: "#2b7df7cc",
    },
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
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 100px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
    },
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
  const alert = useContext(AlertContext);

  // validation to check inputs are valid or not
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
        examCategory: state?.examCategory ? false : true,
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
        examCategory: state?.examCategory ? false : true,
      };
      setState({ ...state });
      return state.error["email"] === false && state?.examCategory && true;
    } else {
      state.error = {
        email: false,
        password: false,
      };
      return true;
    }
  };

  // when click signin button, this will do validation by calling validation function.
  // If validation function return true, specified URL will be redirected.
  // If validation function returns false, it will not execute anything and home page also will not be redirected.
  const submitForm = () => {
    if (validation()) {
      localStorage.setItem(LocalStorageKeys.authToken, "token");
      if (history?.location?.state?.from?.pathname) {
        history.push(history.location.state.from.pathname);
      } else {
        history.push({
          pathname: Routes.home,
          examCategory: state?.examCategory,
        });
        localStorage.setItem("ExamCategory", state?.examCategory);
      }
    }
  };

  //handleChange function is to handle input changes in TextField elements
  // input chamges will be stored in state by using setState function.
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      error: { ...state.error, [event.target.name]: false },
    });
  };

  // Whenever history changes, this useEffect will execute its inside functions
  // when user already logged in, if try to goback to signin page manually
  // it will redirect to home page automatically. else it will redirect to signin page.
  useEffect(() => {
    if (localStorage.getItem(LocalStorageKeys.authToken)) {
      history.push(Routes.home);
    } else {
      history.push(Routes.signIn);
    }
  }, [history]);

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid
        item
        xs={0}
        sm={6}
        style={{
          backgroundImage: `url(${signInPic})`,
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid item xs={12} sm={6}>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              error={state?.error?.examCategory}
              fullWidth
            >
              <Select
                name="examCategory"
                value={state?.examCategory}
                onChange={handleChange}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"physics"}>Physics</MenuItem>
                <MenuItem value={"sports"}>Sports</MenuItem>
                <MenuItem value={"history"}>History</MenuItem>
                <MenuItem value={"arts"}>Arts</MenuItem>
                <MenuItem value={"science"}>Science</MenuItem>
              </Select>
              {state?.error?.examCategory && (
                <Typography
                  component={"span"}
                  variant="subtitle2"
                  style={{ color: "red" }}
                >
                  Select anyone Category
                </Typography>
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
                fullWidth
              >
                {`${state.isLoggingIn ? "Logging In..." : "Log In"}`}
              </Button>
            </Grid>
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
