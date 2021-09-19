import React from 'react';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './media/logo.png';
import Calculator from './components/Calculator';
import Clock from './components/Clock';

const App = () => (
  <>
    {/* Navbar with bootstrap */}
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Calculator</Nav.Link>
            <Nav.Link href="#link">Quote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* Main section */}
    <div className="app">
      <div className="app-container">
        <Clock />
        <h2 className="app-header">Lets do some math!</h2>
        <Calculator />
      </div>
    </div>
  </>

);

export default App;
