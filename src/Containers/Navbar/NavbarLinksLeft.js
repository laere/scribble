import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from '../../Components/NavLink';

export default class NavbarLinksLeft extends Component {
  render() {
    return (
      <div className="navbar-Left">
        <NavLink
          to="/search"
          buttonStyle="navbarBtn"
          iconStyle="fa fa-search navbarIcon"
        />
        <NavLink
          to="/draft"
          buttonStyle="draftBtn"
          text="Draft"
        />
      {/*If Logged in displat NavLink user Icon, else display LogIn button
      {userLoggedIn ? <NavLink /> : <LogIn />}*/}
        <NavLink
          to="/user/:id"
          buttonStyle="navbarBtn"
          iconStyle="fa fa-user navbarIcon"
        />
      </div>
    );
  }
}
