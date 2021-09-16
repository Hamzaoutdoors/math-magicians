import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick, name, className }) => (
  <button type="button" className={className} id={name} name={name} onClick={handleClick}>{name}</button>
);

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
