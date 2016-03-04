import React, { Component } from 'react';
import Input from '../../Components/Input';

class LoginContainer extends Component {
  render() {

    return (
      <div className="loginContainer">
        <form className="loginForm">
          <label>Create an Account</label>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm Password" />
          <div className="formBtns">
            <Input type="submit" value="Sign Up" />
            <Input type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
