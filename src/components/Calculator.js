import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prev) => calculate(prev, e.target.name));
  }

  render() {
    const { total, next, operation } = this.state;
    const buttons = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+']].map((row) => (
      <div className="row" key={row[0]}>
        <button type="button" className="col" id={row[0]} name={row[0]} onClick={this.handleClick}>{row[0]}</button>
        <button type="button" className="col" id={row[1]} name={row[1]} onClick={this.handleClick}>{row[1]}</button>
        <button type="button" className="col" id={row[2]} name={row[2]} onClick={this.handleClick}>{row[2]}</button>
        <button type="button" className="col operature" id={row[3]} name={row[3]} onClick={this.handleClick}>{row[3]}</button>
      </div>
    ));
    return (
      <>
        <div className="calc-container">
          <form id="form">
            <input type="text" id="result" value={(total || 0) + (operation || '') + (next || '')} disabled />
          </form>
          <div className="container">
            {buttons}
            <div className="row">
              <button type="button" className="col-6" name="0" onClick={this.handleClick}>0</button>
              <button type="button" className="col-3" name="." onClick={this.handleClick}>.</button>
              <button type="button" className="col-3 operature" name="=" onClick={this.handleClick}>=</button>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default Calculator;
