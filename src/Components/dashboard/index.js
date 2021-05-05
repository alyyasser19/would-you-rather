import React, { useState, useEffect } from "react";
import QuestionCard from "../questionCard";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  Grid: {
    flexGrow: 1,
    marginBottom: "-3em",
    marginTop: "1em",
    gap: "10em",
  },
  Button: {
    fontSize: 18,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [Unanswered, setUnanswer] = useState(true);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const authenticatedUser = useSelector((state) => state.authenticatedUser);

  const { answered, unanswered } = distribute(
    users,
    questions,
    authenticatedUser
  );

  function distribute(users, questions, authenticatedUser) {
    let userAnswers = users[authenticatedUser] ? Object.keys(users[authenticatedUser].answers) : [];
    return {
      answered: Object.values(questions)
        .filter((question) => userAnswers.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp),
      unanswered: Object.values(questions)
        .filter((question) => !userAnswers.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp),
    };
  }


  return (
    <div className="dashboard-container">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.Grid}>
        <Button
          color="secondary"
          size="large"
          className={classes.Button}
          onClick={() => {
            setUnanswer(true);
          }}>
          Unanswered Questions
        </Button>
        <Button
          color="primary"
          size="large"
          className={classes.Button}
          onClick={() => {
            setUnanswer(false);
          }}>
          Answered Questions
        </Button>
      </Grid>
      {Unanswered ? (
        <>
          <Grid container direction="column">
            {unanswered.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Grid container direction="column">
            {answered.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default Dashboard;
