import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Calculator from '../components/Calculator';
import { calculate } from '../logic/calculate';
import operate from '../logic/operate';

beforeEach(() => {
  render(<Calculator />);
});
afterEach(cleanup);

describe('testing operations', () => {
  test('adding two numbers together', () => {
    const num1Btn = screen.getByTestId('2');
    const num2Btn = screen.getByTestId('3');
    const operation = screen.getByTestId('+');
    expect(operate(num1Btn.id, num2Btn.id, operation.id)).toBe('5');
  });

  test('subtracting two numbers from each other', () => {
    const num1Btn = screen.getByTestId('7');
    const num2Btn = screen.getByTestId('4');
    const operation = screen.getByTestId('-');
    expect(operate(num1Btn.id, num2Btn.id, operation.id)).toBe('3');
  });

  test('multiplying two numbers', () => {
    const num1Btn = screen.getByTestId('4');
    const num2Btn = screen.getByTestId('3');
    const operation = screen.getByTestId('x');
    expect(operate(num1Btn.id, num2Btn.id, operation.id)).toBe('12');
  });

  test('dividing two numbers', () => {
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
  test('dividing two numbers', () => {
    let obj = { total: null };
    obj = calculate(obj, '8');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('4');
  });

  test('dividing by 0', () => {
    let obj = { total: null };
    obj = calculate(obj, '8');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '0');
    obj = calculate(obj, '=');
    expect(obj.total).toMatch('Math Error');
  });

  test('display nothing before operation is complete', () => {
    let obj = { total: null };
    obj = calculate(obj, '2');
    obj = calculate(obj, '1');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual(undefined);
  });

  test('return null when user presses AC', () => {
    let obj = { total: null };
    obj = calculate(obj, '9');
    obj = calculate(obj, 'AC');
    expect(obj.total).toBeFalsy();
  });

  test('return decimal number', () => {
    let obj = { next: null };
    obj = calculate(obj, '7');
    obj = calculate(obj, '.');
    obj = calculate(obj, '5');
    expect(obj.next).toEqual('7.5');
  });
});
