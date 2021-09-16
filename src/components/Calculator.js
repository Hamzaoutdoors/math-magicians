/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { updateState } = this.props;
    e.preventDefault();
    updateState(e.target.name);
  }

  render() {
    const { calculateObj } = this.props;
    const { total, next, operation } = calculateObj;

    const buttons = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+']].map((row) => (
      <div className="row" key={row[0]}>
        <Button name={row[0]} className="col" handleClick={this.handleClick} />
        <Button name={row[1]} className="col" handleClick={this.handleClick} />
        <Button name={row[2]} className="col" handleClick={this.handleClick} />
        <Button name={row[3]} className="col operature" handleClick={this.handleClick} />
      </div>
    ));
    const displayTotal = () => {
      if (total === 0 && next === null) {
        return 0;
      }

      if (total !== 0 && total !== null) {
        return calculateObj.total;
      }
      return '';
    };
    return (
      <>
        <div className="calc-container">
          <form id="form">
            <input type="text" id="result" value={(displayTotal()) + (operation || '') + (next || '')} disabled />
          </form>
          <div className="container">
            {buttons}
            <div className="row">
              <Button name="0" className="col-6" handleClick={this.handleClick} />
              <Button name="." className="col-3" handleClick={this.handleClick} />
              <Button name="=" className="col-3 operature" handleClick={this.handleClick} />
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default Calculator;

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  calculateObj: PropTypes.object.isRequired,
};
