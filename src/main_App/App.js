import React, { Component } from 'react';
import './App.scss';
import Authentication from '../components/authentication/authentication'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Authentication/>
      </div>
    );
  }
}

export default App;
