import React from 'react';
import renderer from 'react-test-renderer';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NavbarComponent from '../components/Navbar';
import App from '../App';

describe('pages test snapshots', () => {
  it('testing Navbar component', () => {
    const tree = renderer
      .create(
        <Router basename={process.env.PUBLIC_URL}>
          <NavbarComponent />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing home page', () => {
    render(<App />);
    const Home = screen.getByText('Home');
    fireEvent.click(Home);
    expect(screen.getByText('Welcome to our page')).toMatchSnapshot();
  });
  it('testing Quote page', () => {
    render(<App />);
    const Quote = screen.getByText('Quote');
    fireEvent.click(Quote);
    expect(screen.getByText('Get motivated with new quote')).toMatchSnapshot();
  });
  it('testing Quote page', () => {
    render(<App />);
    const Calculator = screen.getByText('Calculator');
    fireEvent.click(Calculator);
    expect(screen.getByText('Lets do some math!')).toMatchSnapshot();
  });
  it('testing To do page', () => {
    render(<App />);
    const ToDo = screen.getByText('To Do');
    fireEvent.click(ToDo);
    expect(screen.getByPlaceholderText('Add Todo...')).toMatchSnapshot();
  });
});
