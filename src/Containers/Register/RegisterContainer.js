import React, { Component } from 'react';

import FormWrapper from '../../Components/FormWrapper';
import Input from '../../Components/Input';

class RegisterContainer extends Component {

  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
  }

  render() {

    return (
      <FormWrapper
        className="loginContainer"
        header="Create an Account" >
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Password" />
        <Input type="text" placeholder="Confirm Password" />
        <Input type="submit" value="Sign Up"  className="signUpBtn" onClick={this.handleOnSubmit}/>
        <Input type="submit" value="Have an account?" className="haveAnAccountBtn" onClick={this.handleOnSubmit}/>
      </FormWrapper>
    );
  }
}

export default RegisterContainer;
