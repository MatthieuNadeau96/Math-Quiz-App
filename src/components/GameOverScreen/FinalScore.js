import React, { Component } from 'react';

class FinalScore extends Component {

  render() {
    return (
      <div className="finalScore">
        <p>Final Score: {this.props.finalScore}</p>
      </div>
    );
  }

}

export default FinalScore;
