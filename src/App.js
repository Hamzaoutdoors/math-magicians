import React from 'react';
import logo from './media/logo.png';
import Calculator from './components/Calculator';
import Clock from './components/Clock';

const App = () => (
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
        <Calculator />
      </div>
    </div>
  </>

);

export default App;
