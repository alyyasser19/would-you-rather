import React from "react";
import QuestionCard from "../questionCard";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  var answered= true;
  
  return (
      
    <div className="dashboard-container">
        { answered ?
      (<>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.Grid}>
        <Button color="secondary" size="large" className={classes.Button}>
          Unanswered Questions
        </Button>
        <Button color="primary" size="large" className={classes.Button}>
          Answered Questions
        </Button>
      </Grid>
      <Grid container direction="column">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </Grid>
      </>) : (<></>)}
    </div> 

  );
};

export default Dashboard;
