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

// Input.propTypes = {
//   type: React.PropTypes.string.isRequired,
//   value: React.PropTypes.string,
//   placeholder: React.PropTypes.string.isRequired,
//   className: React.PropTypes.string.isRequired
// };

export default Input;
