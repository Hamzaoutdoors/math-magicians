/* eslint-disable react/destructuring-assignment */

/* I code This component for purpose of practicing components life Cycles method */
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="clock-container">
        <h1 className="clock-header">Hello!</h1>
        <h2>
          {this.state.date.toLocaleTimeString()}
          .
        </h2>
      </div>
    );
  }
}

export default Clock;
