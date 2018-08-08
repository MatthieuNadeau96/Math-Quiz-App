import React, { Component } from 'react';

class FinalScore extends Component {

  render() {
    return (
      <div className="finalScore">
        <p>Final Score: <span>{this.props.finalScore}</span></p>
      </div>
    );
  }

}

export default FinalScore;
