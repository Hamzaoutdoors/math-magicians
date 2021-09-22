import React, { useState } from 'react';
import Button from './Button';
import { calculate, displayTotal } from '../logic/calculate';

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
  const buttons = [['AC', '+/-', '!', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']].map((row) => (
    <div className="row" key={row[0]}>
      {row.length === 4 && <Button name={row[0]} className="col-3" handleClick={handleClick} />}
      <Button name={row[(row.length === 4 ? 1 : 0)]} className={`col-${row.length === 4 ? 3 : 6}`} handleClick={handleClick} />
      <Button name={row[(row.length === 4 ? 2 : 1)]} className="col-3" handleClick={handleClick} />
      <Button name={row[(row.length === 4 ? 3 : 2)]} className="col-3 operature" handleClick={handleClick} />
    </div>
  ));

  return (
    <>
      <div className="calc-container">
        <form id="form">
          <input type="text" id="result" value={(displayTotal(total, next)) + (operation || '') + (next || '')} disabled />
        </form>
        <div className="container">
          {buttons}
        </div>
      </div>
    </>

  );
};

export default Calculator;
