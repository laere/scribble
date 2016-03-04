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

export default NavLink;
