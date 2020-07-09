import React, { Component } from 'react';
import logo from './icon.png';
import Results from './Results.js';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>
          Blueriddle
        </h1>
        <div class="topProgress">
          <div class="topProgress-bar" />
        </div>
        <h2>
          Know where your Amazon products come from
        </h2>
        <Results/>
      </div>
    )
  }
}

export default App;
