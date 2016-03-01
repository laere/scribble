import React, { Component } from 'react';
import { Link } from 'react-router';
// import Logo from './Navbar';

export default class NavbarHeader extends Component {
  render() {
    return (
      <div className="navbar-Header">
        <Link to="/" activeClassName="active">Scribble</Link>
        <Link to="/about" activeClassName="active">About</Link>
      </div>
    );
  }
}
