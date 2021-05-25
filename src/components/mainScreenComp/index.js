import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Avatar, Card, Divider, Grid } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import logo from "../../assets/Frame1681.png";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    backgroundColor: "#EAEAEA",
    borderRadius: "12px",
  },
  title: {
    flexGrow: 1,
  },
  body: {
    // height: "calc(100vh - 200px)",
    height: "80vh",
    marginTop: 67,
  },
  footer: {
    // position: "relative",
    // bottom: 0,
    // left: 0,
  },
  appBar: {
    color: "black",
    backgroundColor: "white",
  },
  footerText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  marketing: {
    display: "inline-flex",
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icons: {
    margin: "0px 10px",
    backgroundColor: "white",
    border: "0.895919px solid #E5E5E5",
    cursor: "pointer",
  },
}));

const MainScreenComp = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar classname={classes.toolBar}>
            <img src={logo} alt="logo" height="50px" width="40px" />
            <div>
              <Typography variant="h6" className={classes.title}>
                Clinical
              </Typography>
              <Typography variant="h4" className={classes.title}>
                Scholar
              </Typography>
            </div>
            <Typography
              variant="h6"
              className={classes.title}
              align="center"
              style={{ textTransform: "uppercase" }}
            >
              Exam Category : {history?.location?.examCategory}
            </Typography>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              style={{ marginRight: 30 }}
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ArrowDropDownIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.body}>{props?.children}</div>
      <Card className={classes.footer}>
        <Grid container>
          <Grid item xs={6}>
            <div style={{ marginLeft: 20, display: "flex", padding: 10 }}>
              <img
                src={logo}
                alt="logo"
                height="50px"
                width="40px"
                style={{ marginTop: 10 }}
              />
              <div>
                <Typography variant="h6" className={classes.title}>
                  Clinical
                </Typography>
                <Typography variant="h4" className={classes.title}>
                  Scholar
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.marketing}>
            <Avatar className={classes.icons}>
              <FacebookIcon style={{ color: "#626262" }} />
            </Avatar>
            <Avatar className={classes.icons}>
              <TwitterIcon style={{ color: "#626262" }} />
            </Avatar>
            <Avatar className={classes.icons}>
              <YouTubeIcon style={{ color: "#626262" }} />
            </Avatar>
            <Avatar className={classes.icons}>
              <InstagramIcon style={{ color: "#626262" }} />
            </Avatar>
          </Grid>
        </Grid>
        <Divider />
        <Grid className={classes.footerText}>
          <Typography variant="caption">@Copyright Clinical scholar</Typography>
          <Typography variant="caption" style={{ margin: "0px 10px" }}>
            {"|"}
          </Typography>
          <Typography variant="caption">
            Powered by Quinoid Business Solutions
          </Typography>
        </Grid>
      </Card>
    </>
  );
};

export default MainScreenComp;
