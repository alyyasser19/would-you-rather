import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Paper, Grid } from "@material-ui/core";

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
  score: {
    marginTop: "-1em",
    padding: "5px",
  },
  round: {
    borderRadius: "100%",
    border: "7px solid",
    borderColor: "rgba(255, 105, 135)",
    padding: "1em",
  },
}));

const QuestionCard = ({ id, author, optionOne, optionTwo,img,selected }) => {
  const classes = useStyles();
    useEffect(() => {
      console.log(selected === optionOne.text, selected === optionTwo.text);
    }, []);
  return (
    <div className="questions-container">
      <div className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography className={classes.header}>{author} Asks:</Typography>
          <Paper elevation={10} className={classes.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.userBox}>
              <Avatar alt="Aoly" src={img} className={classes.large} />
              <Typography variant="h6">Aoly</Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.questionBox}>
              <Typography variant="h6" className={classes.wouldYou}>
                {optionOne.text} :
              </Typography>
              <Paper
                variant="outlined"
                elevation={20}
                className={classes.round}>
                {selected === optionOne.text
                  ? optionOne.votes.length + 1
                  : optionOne.votes.length}
              </Paper>
              <Typography variant="h6" className={classes.wouldYou}>
                {optionTwo.text} :
              </Typography>
              <Paper
                variant="outlined"
                elevation={20}
                className={classes.round}>
                {(selected === optionTwo.text)
                  ? optionTwo.votes.length + 1
                  : optionTwo.votes.length}
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default QuestionCard;
