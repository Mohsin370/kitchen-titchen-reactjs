import React, { Component } from "react";
import "./auth.css";
import Login from "../components/login";
import Signup from "../components/signup";

class Auth extends Component {

  state = {
    isSubmitted: ''
  }


  updateState = () => {
    this.setState({ isSubmitted: true });
  };
  negativeupdateState = () => {
    this.setState({ isSubmitted: false });
  };

  displaymessage = () => {

    if (this.state.isSubmitted === true) {
      return <h1>Update Success!</h1>;
    } else if (this.state.isSubmitted === false) {
      return <h1>Failed!</h1>;
    } else if (this.state.isSubmitted === "") {
      return null;
    }

  };


  render() {
    return (
      <div className="auth-main">
        {this.displaymessage()}
        <div className="container">
          <Login onChange={this.getLoginData} onClick={this.checkLogin} />
          <Signup
            submitState={this.updateState}
            negativeupdate={this.negativeupdateState}
          />
        </div>
      </div>
    );
  };
}

export default Auth;
