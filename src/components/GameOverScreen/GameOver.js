import React, { Component } from 'react';

import FinalScore from './FinalScore';
import PlayAgain from './PlayAgain';

class GameOver extends Component {

  render() {
    return (
      <div className="gameOver">
        <FinalScore finalScore={this.props.finalScore}/>
        <PlayAgain restartGame={this.props.restartGame}/>
      </div>
    );
  }

}

export default GameOver;
