import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Quote from './pages/Quote';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import Clock from './components/Clock';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <>
    <Router>
      <NavbarComponent />
      <div className="app">
        <div className="app-container">
          <Clock />
          <Switch>
            <Route path="/calculator">
              <Calculate />
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
      <Footer className="flex-shrink-0 shadow d-flex align-items-center" />
    </Router>
  </>
);

export default App;
