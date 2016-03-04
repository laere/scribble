import React, { Component } from 'react';
import Section from '../../Components/Section';

const About = () => {
    return (
      <div className="aboutContainer">

        <Section
            className="aboutBanner"
            tagline="aboutBannerTagline"
            header="A place to share your thoughts, and discover others"
        />

        <Section
            className="aboutSectionOne"
            header="Throw your thoughts onto paper, and watch them grow.">
              <p>Scribble is a place that allows users express an idea,
              grow that idea, and share it with others.</p>
        </Section>

      </div>
    );
};

About.propTypes = {
    tagline: React.PropTypes.string,
    header: React.PropTypes.string
};

export default About;
