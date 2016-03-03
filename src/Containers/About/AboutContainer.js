import React, { Component } from 'react';
import AboutBanner from './AboutBanner';
import AboutSection from './AboutSection';

class AboutContainer extends Component {
  render() {

    return (
      <div className="aboutContainer">
        <AboutBanner />
      </div>
    );
  }
}

export default AboutContainer;
