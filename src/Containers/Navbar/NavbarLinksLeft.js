import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NavbarLinksLeft extends Component {
  render() {
    return (
      <div className="navbar-Left">
        <Link to="/search">
          <button className="searchBtn"><i className="fa fa-search"></i></button>
        </Link>
        <Link to="/draft">Draft</Link>
        <Link to="/user/:id">Profile</Link>
      </div>
    );
  }
}
