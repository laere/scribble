import React, { Component } from 'react';
import NavLink from '../../Components/NavLink';


const NavbarLinksLeft = () => {
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
        {/*If Logged in display NavLink user Icon, else display LogIn button
        {userLoggedIn ? <NavLink /> : <LogIn />}*/}
        <NavLink
          to="/login"
          buttonStyle="draftBtn"
          text="Log In"
        />
        <NavLink
          to="/user/:id"
          buttonStyle="navbarBtn"
          iconStyle="fa fa-user navbarIcon"
        />

      </div>
    );
};

export default NavbarLinksLeft;
