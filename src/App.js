import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Quote from './pages/Quote';
import Home from './pages/Home';
import Calc from './pages/Calc';
import Clock from './components/Clock';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <>
    <Router basename={process.env.PUBLIC_URL}>
      <NavbarComponent />
      <div className="app">
        <div className="app-container">
          <Clock />
          <Switch>
            <Route path="/calculator">
              <Calc />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
            <Route exact path="/">
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
