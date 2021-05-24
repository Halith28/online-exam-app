import React from "react";
import {
  Button,
  Grid,
  Modal,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Close } from "@material-ui/icons";
import warning from "../../assets/warning.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  textField: {
    display: "inline-flex",
    width: "100%",
    marginTop: "20px",
    "& .MuiFormControl-root": {
      width: "90%",
    },
    "&:nth-child(even)": {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiFormControl-root": {
        width: "100%",
      },
      "&:nth-child(even)": {
        justifyContent: "center",
      },
    },
  },
  label: {
    width: "150px",
    alignSelf: "center",
  },
  formControl: {
    minWidth: 120,
  },
  paper: {
    padding: "20px 0px",
    borderRadius: 20,
  },
  title: {
    display: "inline-flex",
    marginTop: 20,
    width: "100%",
  },
  modalHeader: {
    fontSize: 18,
    paddingBottom: 15,
    paddingLeft: 20,
    // borderBottom: "1px solid #D4D4D4",
    display: "flex",
    justifyContent: "center",
  },
  modalBody: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  modalFooter: {
    // borderTop: "1px solid #D4D4D4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 20,
  },
  // closeButton: {
  //   position: "absolute",
  //   top: "122px",
  //   right: "220px",
  //   float: "right",
  //   padding: 0,
  //   backgroundColor: "white",
  // },
  closeButton: {
    position: "relative",
    float: "right",
    top: "10px",
    right: "10px",
    marginBottom: "-40px",
    padding: "2px",
  },
}));

const WarningModal = (props) => {
  const classes = useStyles();
  console.log(props);

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {/* <div className={classes.root}> */}
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item lg={3} md={4} sm={6} xs={10}>
          <IconButton
            className={classes.closeButton}
            onClick={props.handleClose}
          >
            <Close />
          </IconButton>
          <Paper className={classes.paper}>
            {/* <IconButton
              className={classes.closeButton}
              onClick={props.handleClose}
            >
              <Close />
            </IconButton> */}
            <div className={classes.modalHeader}>
              <img src={warning} alt="warning" height="100px" width="100px" />
            </div>
            {props.isTitle}
            <div className={classes.modalBody}>
              <Typography variant="h3" align="center">
                Warning
              </Typography>
              <div style={{ margin: "20px 0px" }}>
                <Typography variant="subtitle1" align="center">
                  {props?.Index === 0
                    ? "Are you sure, you want to exit the exam?"
                    : "Are you sure, you want to submit the exam?"}
                </Typography>
              </div>
            </div>
            <div className={classes.modalFooter}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  textTransform: "capitalize",
                  //   width: 80,
                  //   marginRight: 24,
                }}
                fullWidth
                // onChange={(e) => ModalChange(e, props?.selectedData, index)}
                onClick={() => props?.continue()}
              >
                Continue
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
      {/* </div> */}
    </Modal>
  );
};

WarningModal.defaultProps = {
  open: false,
  isTitle: false,
  serial: "",
};

WarningModal.propTypes = {
  open: PropTypes.bool,
  isTitle: PropTypes.bool,
  isAddSerialNo: PropTypes.bool,
  serial: PropTypes.string,
};

export default WarningModal;
