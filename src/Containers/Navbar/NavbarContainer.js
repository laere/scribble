import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import NavbarLinksLeft from './NavbarLinksLeft';


class NavbarContainer extends Component {
  render() {


    return (
      <nav className="navbar">
        <NavbarHeader />
        <NavbarLinksLeft />
      </nav>
    );
  }
}

export default NavbarContainer;
