import React, { Component } from 'react';
import logo from './icon.png';
import Results from './Results.js';
import Logo from './logo.png';
import './App.css';
import './App.scss';
import './loading.scss';
import './lighthouse.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img style={{ textAlign: 'center', padding: '12px' }} src={Logo} height="30px" width="auto"/>
          <div class="topProgress">
            <div class="topProgress-bar" />
          </div>
          <h3 style={{ paddingLeft: '12px', paddingRight: '12px', color: '#082b6e'}}>
            <strong> Know where your Amazon products come from </strong>
          </h3>
        </div>
        <Results/>
      </div>
    )
  }
}

export default App;
