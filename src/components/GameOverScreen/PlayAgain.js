import React, { Component } from 'react';

class PlayAgain extends Component {

  render() {
    return (
      <div className="playAgain">
        <button onClick={() => this.props.restartGame()}>Play Again?</button>
      </div>
    );
  }

}

export default PlayAgain;
