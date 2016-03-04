import React from 'react';
import { Link } from 'react-router';


const NavLink = (props) => {
  return (
    <Link to={props.to}>
      <button className={props.buttonStyle}>
        {props.text}
        <i className={props.iconStyle}></i>
      </button>
    </Link>
  );
};

// NavLink.propTypes = {
//   to: React.PropTypes.string,
//   text: React.PropTypes.string.isRequired,
//   buttonStyle: React.PropTypes.string.isRequired,
//   iconStyle: React.PropTypes.string.isRequired
// };

export default NavLink;
