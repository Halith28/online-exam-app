import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Card, Divider, Grid, SvgIcon } from "@material-ui/core";
import Vector from "../../assets/Vector.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  body: {
    height: "80%",
  },
  footer: {
    position: "relative",
    bottom: 0,
    left: 0,
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
  },
  icons: {
    margin: "0px 10px",
  },
}));

const MainScreenComp = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar classname={classes.toolBar}>
            <Typography variant="h6" className={classes.title}>
              Clinical Scholar
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Exam Category : Physics
            </Typography>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
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
            <img src={Vector} alt="vector" />
            Allah
          </Grid>
          <Grid item xs={6} className={classes.marketing}>
            <Avatar className={classes.icons}>
              <FacebookIcon />
            </Avatar>
            <Avatar className={classes.icons}>
              <TwitterIcon />
            </Avatar>
            <Avatar className={classes.icons}>
              <YouTubeIcon />
            </Avatar>
            <Avatar className={classes.icons}>
              <InstagramIcon />
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