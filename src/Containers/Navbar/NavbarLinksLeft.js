import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavbarLinksLeft extends Component {
  render() {
    return (
      <div className="navbar-Left">
        <Link to="/search" activeClassName="active">Search</Link>
        <Link to="/draft" activeClassName="active">Draft</Link>
        <Link to="/user/:id" activeClassName="active">Profile</Link>
      </div>
    );
  }
}
