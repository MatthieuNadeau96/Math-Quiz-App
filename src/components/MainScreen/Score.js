import React, { Component } from 'react';

class Score extends Component {

  render() {
    return (
      <div className="score">
        <p>Score: {this.props.score}</p>
      </div>
    );
  }

}

export default Score;
