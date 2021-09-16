/* eslint-disable no-console */
import React, { Component } from 'react';
import Calculator from './components/Calculator';
import logo from './media/logo.png';
import Clock from './components/Clock';
import calculate from './logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(buttonName) {
    this.setState((prev) => calculate(prev, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    const calculateObj = { total, next, operation };
    return (
      <>
        <div className="app">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
          <div className="app-container">
            <Clock />
            <h2 className="app-header">Lets do some math!</h2>
            <Calculator calculateObj={calculateObj} updateState={this.updateState} />
          </div>
        </div>
      </>

    );
  }
}

export default App;
