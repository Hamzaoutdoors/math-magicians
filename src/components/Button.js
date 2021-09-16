import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, className, handleClick } = this.props;
    return (
      <button type="button" className={className} id={name} name={name} onClick={handleClick}>{name}</button>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
