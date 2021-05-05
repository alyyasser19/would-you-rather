import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setAuthenticatedUser } from "../../actions/authenticateUser";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  MenuItem,
  TextField,
} from "@material-ui/core";
import "./login.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 29,
  },
  pos: {
    marginBottom: 12,
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "25ch",
  },
}));

export default function Index() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const classes = useStyles();
  const [user, setUser] = useState("Select your user");
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setUser(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    dispatch(setAuthenticatedUser(user));
    setRedirect(true);
    return <Redirect to="/" />;
  };


  return (
    <div>
      {redirect ? (
        <Router>
          <Redirect to="/" />
        </Router>
      ) : (
        <div className="login-container">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
                variant="h1">
                Welcome To AOLYLAND's WOULD YOU RATHER
              </Typography>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select"
                  value={user}
                  onChange={handleChange}
                  helperText="select your user">
                  {Object.keys(users).map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </form>
              <Button variant="outlined" color="primary" onClick={login}>
                Login
              </Button>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}
