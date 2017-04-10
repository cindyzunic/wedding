import React, { Component } from 'react';
import logo from './katoslavhead.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Glenn and Zindy</h2>
        </div>
        <p className="App-intro">
          Ohhhh...
        </p>
      </div>
    );
  }
}

export default App;
