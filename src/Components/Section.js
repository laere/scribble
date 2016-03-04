import React, { Component } from 'react';

const Section = (props) => {
  return (
    <div className={props.className}>
      <h2 className={props.tagline}>{props.header}</h2>
      {props.children}
    </div>
  );
};

Section.propTypes = {
    tagline: React.PropTypes.string,
    header: React.PropTypes.string,
    className: React.PropTypes.string
};


export default Section;
