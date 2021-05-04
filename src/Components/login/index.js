import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
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

let People = [
  {
    id: "sarahedo",
    name: "Sarah Edo",
  },
  {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
  },
  {
    id: "johndoe",
    name: "John Doe",
  },
];

export default function Index() {
  const classes = useStyles();
  const [user, setUser] = useState("Select your user");
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div>
      <div className="login-container">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
              variant= 'h1'>
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
                {People.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </form>
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}
