import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorObj, setCalculatorObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { total, next, operation } = calculatorObj;

  const handleClick = (e) => {
    e.preventDefault();
    setCalculatorObj((prevState) => ({
      ...calculate(prevState, e.target.name),
    }));
  };

  const buttons = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+']].map((row) => (
    <div className="row" key={row[0]}>
      <Button name={row[0]} className="col" handleClick={handleClick} />
      <Button name={row[1]} className="col" handleClick={handleClick} />
      <Button name={row[2]} className="col" handleClick={handleClick} />
      <Button name={row[3]} className="col operature" handleClick={handleClick} />
    </div>
  ));
  const displayTotal = () => {
    if (total === 0 && next === null) {
      return 0;
    }

    if (total !== 0 && total !== null) {
      return total;
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
            <Button name="0" className="col-6" handleClick={handleClick} />
            <Button name="." className="col-3" handleClick={handleClick} />
            <Button name="=" className="col-3 operature" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </>

  );
};

export default Calculator;
