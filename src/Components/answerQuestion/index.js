import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Paper, Grid, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { handleAnswer } from "../../actions/shared";
import Results from "../Results";

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


const Index = (props) => {
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  const authenticatedUser = useSelector((state) => state.authenticatedUser);
  const [unanswered, setUnanswer] = useState(true);
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();

    
    useEffect(() => {
      if(typeof props.location.state!=='undefined') 
      if (
        optionOne.votes.includes(authenticatedUser) ||
        optionTwo.votes.includes(authenticatedUser)
      ) {
        setUnanswer(false);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticatedUser,props.location.state]);
  if (typeof props.location.state==='undefined') {
    return (
      <Typography variant="h6" className={classes.wouldYou}>
        ERROR 404 PAGE DOESNT EXIST
      </Typography>
    );
  }
  
    const {
      id,
      author,
      optionOne,
      optionTwo,
    } = props.location.state.question.question;

  return (
    <div className="questions-container">
      {unanswered ? (
        <div className={classes.root}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Typography className={classes.header}>{author} Asks:</Typography>
            <Paper elevation={10} className={classes.paper}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.userBox}>
                <Avatar
                  alt="Aoly"
                  src={users[author].avatarURL}
                  className={classes.large}
                />
                <Typography variant="h6">{author}</Typography>
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.questionBox}>
                <Typography variant="h6" className={classes.wouldYou}>
                  Would You Rather:
                </Typography>
                <Button
                  color="primary"
                  size="large"
                  onClick={() => {
                    dispatch(handleAnswer(authenticatedUser, id, "optionOne"));
                    setSelected(optionOne.text);
                    setUnanswer(false);
                  }}>
                  {optionOne.text}
                </Button>
                <Typography variant="subtitle1" className={classes.wouldYou}>
                  Or....
                </Typography>
                <Button
                  color="secondary"
                  size="large"
                  onClick={() => {
                    dispatch(handleAnswer(authenticatedUser, id, "optionTwo"));
                    setSelected(optionTwo.text);
                    setUnanswer(false);
                  }}>
                  {optionTwo.text}
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </div>
      ) : (
        <Results
          id={id}
          author={author}
          optionTwo={optionTwo}
          optionOne={optionOne}
          img={users[author].avatarURL}
          selected={selected}
        />
      )}
    </div>
  );
};

export default Index;
