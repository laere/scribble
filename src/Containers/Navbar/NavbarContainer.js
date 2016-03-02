import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import NavbarLinksLeft from './NavbarLinksLeft';


class NavbarContainer extends Component {
  render() {


    return (
      <nav className="mainNavbar">
        <NavbarHeader />
        <NavbarLinksLeft />
      </nav>
    );
  }
}

export default NavbarContainer;
