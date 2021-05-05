import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Paper,
  Grid,
  Button,
  Snackbar,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { handleAddQuestion } from "../../actions/shared";
import MuiAlert  from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "-webkit-center",
    flexWrap: "wrap",
    marginBottom: "-3em",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  paper: {
    width: "60%",
    padding: "1em",
    display: "flex",
    flexDirection: "row",
  },
  header: {
    ...theme.typography.button,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    padding: theme.spacing(1),
    marginTop: theme.spacing(5),
    width: "58%",
  },
  userBox: {
    padding: theme.spacing(1),
    width: "30%",
  },
  questionBox: {
    padding: theme.spacing(1),
  },
  question: {
    marginTop: theme.spacing(1),
  },
  marginTop: {
    marginTop: theme.spacing(3),
    width: "50%",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const QuestionCard = () => {
  const classes = useStyles();
  const authenticatedUser = useSelector((state) => state.authenticatedUser);
  const dispatch = useDispatch();
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleAnswer = (e) => {
    dispatch(handleAddQuestion(authenticatedUser, option1, option2));
    //show sucess
  };

  return (
    <div className="questions-container">
      <div className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography className={classes.header}>
            What's Your Question!?
          </Typography>
          <Paper elevation={10} className={classes.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.questionBox}>
              <Typography variant="subtitle1" className={classes.question}>
                Would You Rather
              </Typography>
              <TextField
                id="filled-basic"
                label=""
                onChange={(e) => {
                  setOption1(e.target.value);
                }}
              />
              <Typography variant="subtitle1" className={classes.question}>
                Or
              </Typography>
              <TextField
                id="filled-basic"
                label=""
                onChange={(e) => {
                  setOption2(e.target.value);
                }}
              />
              <Button
                variant="contained"
                size="large"
                className={classes.marginTop}
                color="secondary"
                onClick={() => {handleAnswer();
                handleClick();}}>
                Submit
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  Question Added!
                </Alert>
              </Snackbar>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default QuestionCard;
