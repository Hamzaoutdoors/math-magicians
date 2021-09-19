import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './media/logo.png';
import Quote from './pages/Quote';
import Home from './pages/Home';
import Calculator from './components/Calculator';
import Clock from './components/Clock';

const App = () => (
  <>
    <Router>
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
          <Navbar.Collapse id="basic-navbar-nav" d="flex">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/calculator">Calculator</Link>
              <Link to="/quote">Quote</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main section */}

      <div className="app">
        <div className="app-container">
          <Clock />
          <h2 className="app-header">Lets do some math!</h2>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </>
);

export default App;
