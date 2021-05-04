import React, { Component } from "react";
import Login from "../login";
import Nav from "../navbar";
import Dashboard from "../dashboard";
import CreateQuestion from "../createQuestion";
import "./app.scss";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  render() {
    return (
      <div>
       {this.state.loggedIn ? <Login /> :
       (<>
       <Nav/> 
       <Dashboard/>
       </>)}
      </div>
    );
  }
}
