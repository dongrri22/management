import React, { useState } from "react";
import Joi, { validate } from "joi-browser";

class Login extends Component {
  submitHandler = (event) => {
      event.preventDefault();
      console.log(event.target.id.value, event.target.pwd.value);
      this.props.login_process({
          id: event.target.id.value,
          pwd: event.target.pwd.value
      })
  }
  render () {
      return(
          <div className="loginWrap"> 
              <h1>LOGIN</h1>
              <form onSubmit={this.submitHandler}>
                  <input type="text" name="id" placeholder="ID"></input><br></br>
                  <input type="password" name="pwd" placeholder="PASSWORD"></input><br></br>
                  <input type="submit" value="LOGIN"/>
              </form>
          </div>
      );
  }
}
export default Login;