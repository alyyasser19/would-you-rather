import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {
  Link as NavLink,
} from "react-router-dom";

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
            <Button color="inherit">New Question</Button>
            <Button color="inherit">Leaderboard</Button>
          </Toolbar>
        </AppBar>
      </div>
  );
}
