import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticatedUser } from "../../actions/authenticateUser";

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
}));

const LinkRouter = (props) => <Link {...props} component={NavLink} />;

export default function ButtonAppBar({ user }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(setAuthenticatedUser(null));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            hello {user}
          </Typography>
          <LinkRouter color="inherit" to="/">
            <Button color="inherit">Home</Button>
          </LinkRouter>
          <LinkRouter color="inherit" to="/add">
            <Button color="inherit">New Question</Button>
          </LinkRouter>
          <LinkRouter color="inherit" to="/leaderboard">
            <Button color="inherit">Leaderboard</Button>
          </LinkRouter>
          <LinkRouter color="inherit" to="/">
            <Button color="inherit"  onClick={logout} >Logout</Button>
          </LinkRouter>
        </Toolbar>
      </AppBar>
    </div>
  );
}
