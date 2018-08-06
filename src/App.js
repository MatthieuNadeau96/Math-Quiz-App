import React, { Component } from 'react';
import './App.css';

import MainScreen from './components/MainScreen/MainScreen';

class App extends Component {
  render() {
    return (
      <div className="displayCard">
        <MainScreen/>
      </div>
    );
  }
}

export default App;
