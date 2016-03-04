import React, { Component } from 'react';

class AboutContainer extends Component {
  render() {

    return (
      <div className="aboutContainer">
        <div className="aboutBanner">
            <h2 className="aboutBannerTagline">A place to share your thoughts, and discover others.</h2>
        </div>
        <div className="aboutSectionOne">
          <h2>Throw your thoughts onto paper, and watch them grow.</h2>
          <p>Scribble is a place that allows users express an idea,
            grow that idea, and share it with others.</p>
          <h3>So. What are you thinking?</h3>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
