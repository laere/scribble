import React, { Component } from 'react';
import { Link } from 'react-router';

class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/search" activeClassName="active">Search</Link></li>
          <li><Link to="/draft" activeClassName="active">Draft</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavbarContainer;
