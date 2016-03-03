import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NavbarLinksLeft extends Component {
  render() {
    return (
      <div className="navbar-Left">
        <Link to="/search">
          <button className="navbarBtn">
            <i className="fa fa-search navbarIcon"></i>
          </button>
        </Link>
        <Link to="/draft">
          <button className="draftBtn">Draft</button>
        </Link>
        <Link to="/user/:id">
          <button className="navbarBtn">
            <i className="fa fa-user navbarIcon"></i>
          </button>
        </Link>
      </div>
    );
  }
}
