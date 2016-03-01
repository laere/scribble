import React, { Component } from 'react';

import Navbar from '../Containers/Navbar/NavbarContainer';
// import AboutContainer from '../Containers/About/AboutContainer';
// import HomeContainer from '../Containers/Home/HomeContainer';
// import SearchContainer from '../Containers/Search/SearchContainer';
// import UserContainer from '../Containers/User/UserContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
