import React, { Component } from 'react';
import Section from '../../Components/Section';

class UserContainer extends Component {
  render() {
    return (
      <Section className="userContainer" header="Users' Name">
        <p>Profile information That can be edited</p>
        <span>Following 0</span>
        <span>Followers 0</span>
        <i className="fa fa-twitter fa-2x"></i>
      </Section>
    );
  }
}

export default UserContainer;
