import React, { Component } from 'react';

class Score extends Component {

  render() {
    return (
      <div className="score">
        <p>Score: <span>{this.props.score}</span></p>
      </div>
    );
  }

}

export default Score;
