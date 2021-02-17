import React, { Component } from "react";
import "./signup.css";
import Input from "./input";
import axios from '../environment/environment';

class Signup extends Component {
  state = {
    signupdata: [
      { type: "text", placeholder: "Name" },
      { type: "email", placeholder: "Email" },
      { type: "password", placeholder: "Password" }
    ],
    name: "",
    email: "",
    password: ""
  };

  getUserDetails = e => {
    if (e.target.placeholder == "Name") {
      this.setState({ name: e.target.value });
    } else if (e.target.placeholder == "Email") {
      this.setState({ email: e.target.value });
    } else if (e.target.placeholder == "Password") {
      this.setState({ password: e.target.value });
    }

    console.log(this.state.name, this.state.email, this.state.password);
  };
  onSubmit = () => {
    if (
      this.state.name != "" &&
      this.state.email != "" &&
      this.state.password != ""
    ) {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      axios
        .post("/register", user)
       //.post("users/register", user)  
       .then(   window.location.reload(true))
        .catch(res => console.log(res));
     

      return this.props.submitState();

    } else {
      this.props.negativeupdate();
    }
  };

  render() {
    return (
      <div className="signup-main">
        <div className="loginform">
          <h1 className="login-header">Sign up</h1>
          {this.state.signupdata.map(response => (
            <Input
              type={response.type}
              placeholder={response.placeholder}
              onChange={this.getUserDetails}
            />
          ))}
          <button
            
            className="signup-btn"
            onClick={this.onSubmit}
          >
            Signup
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
