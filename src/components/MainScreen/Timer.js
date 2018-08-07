import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div  className="timerBar">
        <div id="timerProgress" className="timerProgress"></div>
      </div>
    );
  }

}

export default Timer;
