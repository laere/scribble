import React, { Component } from 'react';


const FormWrapper = (props) => {
  return (
    <div className={props.className}>
      <form>
        <label>{props.header}</label>
          {props.children}
      </form>
    </div>
  );
};

export default FormWrapper;
