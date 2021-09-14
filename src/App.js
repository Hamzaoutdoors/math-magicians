/* eslint-disable react/no-unescaped-entities */
import Calculator from './components/Calculator';
import logo from './media/logo.png';

function App() {
  return (
    <div className="app">
      <img
        src={logo}
        alt="Logo"
        className="logo"
      />
      <div className="app-container">
        <h2 className="app-header">Let's do some math!</h2>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
