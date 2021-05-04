import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Paper, Grid, Button } from "@material-ui/core";

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

const QuestionCard = () => {
  const classes = useStyles();

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
              <TextField id="filled-basic" label="" />
              <Typography variant="subtitle1" className={classes.question}>
                Or
              </Typography>
              <TextField id="filled-basic" label="" />
              <Button
                variant="contained"
                size="large"
                className={classes.marginTop}
                color="secondary"
                fullwidth>
                Submit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default QuestionCard;
