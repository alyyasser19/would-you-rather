import React, { Component } from "react";
import { connect } from "react-redux";
import { handeInitialData } from "../../actions/shared";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../login";
import Nav from "../navbar";
import Dashboard from "../dashboard";
import Leaderboard from "../leaderboard";
import createQuestion from "../createQuestion";
import answerQuestion from "../answerQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handeInitialData());
    console.log("dispatched")
  }


  render() {
    const { authenticatedUser } = this.props;
 

    return (
      <div>
        {authenticatedUser ? (
          <>
            <Router>
              <Nav user={authenticatedUser} />
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/new" component={createQuestion} />
                <Route path="/login" component={Login} />
                <Route path="/questions/:id" component={answerQuestion} />
              </Switch>
            </Router>
          </>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authenticatedUser }) {
  return {
    authenticatedUser,
    loading: authenticatedUser === null,
  };
}

export default connect(mapStateToProps)(App);
