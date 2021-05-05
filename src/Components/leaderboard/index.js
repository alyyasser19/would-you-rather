import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Paper, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

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

const QuestionCard = () => {
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  const orderedUsers = Object.values(users).sort((a, b) => {
    const low = Object.keys(a.answers).length + a.questions.length;
    const high = Object.keys(b.answers).length + b.questions.length;
    return high - low;
  });

  return (
    <div className="questions-container">
      {orderedUsers.map((user) => (
        <div className={classes.root} id={user}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Typography className={classes.header}>{user.name}</Typography>
            <Paper elevation={10} className={classes.paper}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.userBox}>
                <Avatar
                  alt="Aoly"
                  src={user.avatarURL}
                  className={classes.large}
                />
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.questionBox}>
                <Typography variant="subtitle1" className={classes.wouldYou}>
                  Answered Questions: {Object.keys(user.answers).length}
                </Typography>
                <Typography variant="subtitle1" className={classes.wouldYou}>
                  Created Questions: {user.questions.length}
                </Typography>
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.questionBox}>
                <Typography variant="h6" className={classes.score}>
                  Score:
                </Typography>
                <Paper
                  variant="outlined"
                  elevation={20}
                  className={classes.round}>
                  <Typography variant="h6" className={classes.wouldYou}>
                    {Object.keys(user.answers).length + user.questions.length}
                  </Typography>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
