import React, { Component } from 'react';
import {Line} from 'rc-progress';

class Timer extends Component {

  render() {
    return (
      <div>
        <Line percent={this.props.time} strokeWidth="4" strokeColor="#fc8e3a"/>
      </div>
    );
  }

}

export default Timer;
