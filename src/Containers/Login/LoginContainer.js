import React, { Component } from 'react';
import Input from '../../Components/Input';

class LoginContainer extends Component {
  render() {

    return (
      <div>
        <form className="loginForm">
          <label>Create an Account</label>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm Password" />
        </form>
      </div>
    );
  }
}

export default LoginContainer;
