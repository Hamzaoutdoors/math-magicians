import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="calc-container">
          <form id="form">
            <input type="text" id="result" value="0" disabled />
          </form>
          <div className="container">
            <div className="row">
              <button type="button" className="col">AC</button>
              <button type="button" className="col">+/-</button>
              <button type="button" className="col">%</button>
              <button type="button" className="col operature">÷</button>
            </div>
            <div className="row">
              <button type="button" className="col">7</button>
              <button type="button" className="col">8</button>
              <button type="button" className="col">9</button>
              <button type="button" className="col operature">x</button>
            </div>
            <div className="row">
              <button type="button" className="col">4</button>
              <button type="button" className="col">5</button>
              <button type="button" className="col">6</button>
              <button type="button" className="col operature">-</button>
            </div>
            <div className="row">
              <button type="button" className="col">1</button>
              <button type="button" className="col">2</button>
              <button type="button" className="col">3</button>
              <button type="button" className="col operature">+</button>
            </div>
            <div className="row">
              <button type="button" className="col-6">0</button>
              <button type="button" className="col-3">.</button>
              <button type="button" className="col-3 operature">=</button>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default Calculator;
