import React, { Component } from 'react';
import Calculator from './components/Calculator';
import logo from './media/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <div className="app-container">
          <h2 className="app-header">Lets do some math!</h2>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
