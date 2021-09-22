/* eslint-disable no-restricted-syntax */
import React from 'react';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import Button from '../Button';
import Calculator from '../Calculator';
import operate from '../../logic/operate';

describe('calculator testing', () => {
  test('calculator contains all buttons', () => {
    const calcButtons = ['AC', '+/-', '!', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const handleClick = (e) => {
      expect(e.target.name).toEqual('÷');
    };

    render(
      <Calculator>
        <Button name={calcButtons[3]} id={calcButtons[3]} className="col-3 operature" handleClick={handleClick} />
      </Calculator>,
    );

    for (const btn of calcButtons) {
      expect(screen.getByText(btn)).toBeInTheDocument();
    }
  });

  test('clicking the button toggles the number', () => {
    render(<Calculator />);
    const button = screen.getByTestId('1');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});

describe('testing operations', () => {
  test('adding two numbers together', () => {
    render(<Calculator />);
    const num1Btn = screen.getByTestId('2');
    const num2Btn = screen.getByTestId('3');
    const operation = screen.getByTestId('+');
    expect(operate(num1Btn.id, num2Btn.id, operation.id)).toBe('5');
  });

  test('subtracting two numbers from each other', () => {
    render(<Calculator />);
    const num1Btn = screen.getByTestId('7');
    const num2Btn = screen.getByTestId('4');
    const operation = screen.getByTestId('-');
    expect(operate(num1Btn.id, num2Btn.id, operation.id)).toBe('3');
  });

  test('multiplying two numbers', () => {
    render(<Calculator />);
    const num1Btn = screen.getByTestId('4');
    const num2Btn = screen.getByTestId('3');
    const operation = screen.getByTestId('x');
    expect(operate(num1Btn.id, num2Btn.id, operation.id)).toBe('12');
  });
  
  test('dividing two numbers', () => {
    render(<Calculator />);
    const num1Dig1Btn = screen.getByTestId('3');
    const num1Dig2Btn = screen.getByTestId('6');
    const num1 = num1Dig1Btn.id + num1Dig2Btn.id;
    const num2Dig1Btn = screen.getByTestId('1');
    const num2Dig2Btn = screen.getByTestId('2');
    const num2 = num2Dig1Btn.id + num2Dig2Btn.id;
    const operation = screen.getByTestId('÷');
    expect(operate(num1, num2, operation.id)).toBe('3');
  });
});

describe('testing calculations', () => {
  
});

afterEach(cleanup);
