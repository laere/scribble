import React from 'react';

const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
        />
    </div>
  );
};

export default Input;
