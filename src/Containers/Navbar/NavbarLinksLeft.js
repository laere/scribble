import React, { Component } from 'react';
import { Link } from 'react-router';
import Seperator from './Seperator';

export default class NavbarLinksLeft extends Component {
  render() {
    return (
      <div className="navbar-Left">
        <Link to="/search">Search</Link>
        <Link to="/draft">Draft</Link>      
        <Link to="/user/:id">Profile</Link>
      </div>
    );
  }
}
