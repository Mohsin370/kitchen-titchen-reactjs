import React, { Component } from "react";
import "./login.css";
import Input from "./input";
import axios from '../environment/environment';

class Login extends Component {
  state = {
    inputdata: [
      { type: "email", placeholder: "Email" },
      { type: "password", placeholder: "Password" }
    ],
    userData:[],
    Email:'',
    Password:'',
    
  };

  componentDidMount ()  {
    axios
    .get("/login-request")
    //.get("http://localhost:4000/login-request/")
    .then(Response => this.setState({ userData : Response.data}))
    .catch(err => console.log(err));


  }

  getLoginData = (e) => {
    if(e.target.placeholder === 'Email')
    {
      this.setState({Email: e.target.value})
    }else if (e.target.placeholder === 'Password'){

      this.setState({Password: e.target.value})
    }
      
  }
  signIn = () => {
  //  console.log(this.state.userData);
  let flag = false
    this.state.userData.map(response =>{
      
      if(response.Email == this.state.Email && response.Password == this.state.Password)
      { 
        console.log('success');
        
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userId', response._id);
        window.location.reload(false);
          flag= true;
        

        
      }
      
    })

    if(flag!== true)
    {
    window.alert("Username or Password is incorrect");
    }
  }

 

  render() {
    return (
      <div className="login-main">
        <div className="loginform">
          <h1 className="login-header">Login</h1>
          {this.state.inputdata.map(response => (
            <Input type={response.type} placeholder={response.placeholder} onChange = {this.getLoginData} />
          ))}
          <button className="login-btn" type="submit" onClick={this.signIn}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
