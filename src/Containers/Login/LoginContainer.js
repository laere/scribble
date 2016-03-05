import React, { Component } from 'react';
import { Link } from 'react-router';
import FormWrapper from '../../Components/FormWrapper';
import Input from '../../Components/Input';

class LoginContainer extends Component {

  render() {

    return (
      <FormWrapper
        className="loginContainer"
        header="Log in" >
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Password" />
        <Input type="submit" value="Log In"  className="signUpBtn"/>
        <Link to="/register">
          <Input type="submit" value="Need an account?" className="haveAnAccountBtn"/>
        </Link>
      </FormWrapper>
    );
  }
}

export default LoginContainer;
