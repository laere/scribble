import React, { Component } from 'react';
import { Link } from 'react-router';
import Seperator from './Seperator';

export default class NavbarHeader extends Component {
  render() {
    return (
      <div className="navbar-Header">
        <Link to="/">Scribble</Link>
        <Seperator />
        <Link to="/about">About</Link>
        <Seperator />
      </div>
    );
  }
}
