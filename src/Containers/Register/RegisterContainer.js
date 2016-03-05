import React, { Component } from 'react';
import { Link } from 'react-router';
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
        <Link to="/login">
          <Input type="submit" value="Have an account?" className="haveAnAccountBtn" onClick={this.handleOnSubmit}/>
        </Link>
      </FormWrapper>
    );
  }
}

export default RegisterContainer;
