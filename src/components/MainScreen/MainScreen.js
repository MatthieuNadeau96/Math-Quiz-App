import React, { Component } from 'react';
import Question from './Question';

class MainScreen extends Component {

  render() {
    return (
      <div>
        <p>Timer Bar</p>
        <Question/>
        <p>Answer Equation</p>
        <p>No</p><p>Yes</p>
        <p>Score: 0</p>
      </div>
    );
  }

}

export default MainScreen;
