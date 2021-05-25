import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
// import { AlertContext } from "../../contexts";
// import { AlertProps } from "../../utils/constants";
import { red } from "@material-ui/core/colors";
import signUpPic from "../../assets/Frame1679.png";
import { Routes } from "../../router/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#fff !important",
  },
  body: {
    padding: "50px",
    width: "100%",
    // margin: "50px",
    // boxShadow:
    //   "0px 2px 2px rgb(0 0 0 / 14%), 0px 3px 1px rgb(0 0 0 / 12%), 0px 1px 5px rgb(0 0 0 / 20%)",
    // boxShadow: "0 1px 2px 0 rgb(0 0 0 / 5%)",
    // border: "1px solid rgba(0,40,100,.12)",
    background: "#FFFFFF",
    boxShadow: "0px 6px 60px rgba(0, 0, 0, 0.08)",
    borderRadius: "20px",
    "& .MuiFormControl-root": {
      // marginTop: "16px",
      marginBottom: "16px",
    },
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0px",
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
  logIn: {
    textAlign: "center",
  },
  codeCard: {
    marginTop: "20px",
  },
  passCode: {
    // width: "100px",
    // [theme.breakpoints.up("md")]: {
    //   width: "80px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   "& .MuiOutlinedInput-root": {
    //     width: "70px",
    //     height: "70px",
    //   },
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "40px",
    // },
    "& .MuiInputBase-input": {
      textAlign: "center",
    },
  },
  divider: {
    marginBottom: "10px",
    width: "70%",
    margin: " auto  ",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
    // marginBottom: "16px",
  },
  content: {
    padding: "0px 100px",

    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
    },
    // maxWidth: "600px",
    // height: "400px",
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
    "& .MuiFormGroup-root": {
      flexDirection: "row",
    },
    "&$checked": {
      color: red[600],
    },
    "& .MuiFormControlLabel-root": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  firstRadio: {
    [theme.breakpoints.up(480)]: {
      "& .MuiRadio-root": {
        marginLeft: "-10px",
      },
    },
  },
  loginTitle: {
    marginBottom: 20,
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    email: "",
    error: {},
  });
  //   const alert = useContext(AlertContext);

  const handleChange1 = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  console.log(state);

  //   const validation = () => {
  //     if (state?.email?.length === 0) {
  //       state.error = {
  //         email:
  //           state?.email?.length === 0 ||
  //           /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email) ===
  //             false
  //             ? true
  //             : false,
  //       };
  //       setState({ ...state });
  //       return true;
  //     } else if (state?.email.length > 0) {
  //       state.error = {
  //         ...state.error,
  //         email:
  //           /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email) ===
  //           false
  //             ? true
  //             : false,
  //       };
  //       setState({ ...state });
  //       return true;
  //     } else {
  //       state.error = {
  //         email: false,
  //       };
  //       return true;
  //     }
  //   };

  //   const submitForm = () => {
  //     const params = {
  //       email: state.email,
  //       username: state.email,
  //       usertype: state.userType,
  //     };
  //     if (validation()) {
  //       if (state?.email?.length === 0) {
  //         alert.setSnack({
  //           ...alert,
  //           open: true,
  //           severity: AlertProps.severity.error,
  //           msg: "Please fill the required fields",
  //           vertical: AlertProps.vertical.top,
  //           horizontal: AlertProps.horizontal.center,
  //         });
  //       }
  //       if (!state?.error?.email) {
  //         axios
  //           .post(`https://dev.prodkt.co/backend/Keycloak/Signup`, params)
  //           .then((res) => {
  //             if (res.status === 200) {
  //               state.email = "";
  //               alert.setSnack({
  //                 ...alert,
  //                 open: true,
  //                 severity: AlertProps.severity.success,
  //                 msg: "Please check your email to setup Password",
  //                 vertical: AlertProps.vertical.top,
  //                 horizontal: AlertProps.horizontal.center,
  //               });
  //               setTimeout(() => {
  //                 history.push("/login");
  //               }, 5000);
  //             } else {
  //               alert.setSnack({
  //                 ...alert,
  //                 open: true,
  //                 severity: AlertProps.severity.error,
  //                 msg: "Please check your Email",
  //                 vertical: AlertProps.vertical.top,
  //                 horizontal: AlertProps.horizontal.center,
  //               });
  //             }
  //           })
  //           .catch((error) => {
  //             alert.setSnack({
  //               ...alert,
  //               open: true,
  //               severity: AlertProps.severity.error,
  //               msg: "Email already exists",
  //               vertical: AlertProps.vertical.top,
  //               horizontal: AlertProps.horizontal.center,
  //             });
  //           });
  //       }
  //     }
  //   };

  // const handleChange = (event) => {
  //   setState({
  //     email: event.target.value,
  //     error: { email: false },
  //   });
  // };

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid
        item
        xs={0}
        sm={6}
        style={{
          backgroundImage: `url(${signUpPic})`,
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        {/* <img src={signUpPic} alt="SignUpPage" height="100%" width="100%" /> */}
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.content}>
          <Paper className={classes.body}>
            <Grid>
              <Typography variant="h5" className={classes.loginTitle}>
                User Sign Up
              </Typography>
              <Typography variant="subtitle1">Your Email</Typography>
              <TextField
                name="email"
                variant="standard"
                fullWidth
                placeholder="Enter your official mail Id"
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
                name="email"
                variant="standard"
                fullWidth
                placeholder="Enter your Password"
                onChange={handleChange1}
                error={state?.error?.email ?? false}
                helperText={
                  state?.error?.email && (
                    <Typography
                      component={"span"}
                      variant="subtitle2"
                      style={{ color: "red" }}
                    >
                      Enter your Password
                    </Typography>
                  )
                }
              />
              <Typography variant="subtitle1">Confirm Password</Typography>
              <TextField
                name="email"
                variant="standard"
                fullWidth
                placeholder="ReEnter your Password"
                onChange={handleChange1}
                error={state?.error?.email ?? false}
                helperText={
                  state?.error?.email && (
                    <Typography
                      component={"span"}
                      variant="subtitle2"
                      style={{ color: "red" }}
                    >
                      Confirm your Password
                    </Typography>
                  )
                }
              />

              <Grid className={classes.buttonGrid}>
                <Button
                  className={classes.button}
                  variant="contained"
                  // onClick={() => setVerifySignup(true)}
                  onClick={() => history.push(Routes.signIn)}
                  fullWidth
                >
                  SIGN UP
                </Button>
              </Grid>
              <Typography variant="subtitle2" className={classes.logIn}>
                Already have an account?{" "}
                <Link className={classes.link} to="/signIn">
                  Sign In
                </Link>
              </Typography>
            </Grid>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
