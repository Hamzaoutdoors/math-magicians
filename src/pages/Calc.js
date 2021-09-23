import React from 'react';
import Calculator from '../components/Calculator';
import headerImage from '../media/calculator_banner.png';

const Calc = () => (
  <div className="calc-wrapper">
    <img
      src={headerImage}
      alt="calc-header"
      className="heaer-image"
    />
    <h2 className="calc-header">Lets do some math!</h2>
    <Calculator />
  </div>
);

export default Calc;
