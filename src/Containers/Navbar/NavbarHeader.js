import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NavbarHeader extends Component {
  render() {
    return (
      <div className="navbar-Header">
        <Link to="/">Scribble</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
