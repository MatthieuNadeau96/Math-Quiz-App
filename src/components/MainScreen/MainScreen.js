import React, { Component } from 'react';

import Question from './Question';
import Answer from './Answer';
import YesNo from './YesNo';
import Score from './Score';
import Timer from './Timer';
import GameOver from '../GameOverScreen/GameOver';

var progress;

class MainScreen extends Component {

  state = {
    time: 1,
    numberOne: undefined,
    numberTwo: undefined,
    sign: undefined,
    realAnswer: undefined,
    answer: undefined,
    score: 0,
    gameOver: false
  }

  componentDidMount() {
    this.setQuestion();
    this.timerCountDown();

  }

  setQuestion = () => {
    let numberOne = Math.floor(Math.random() * 10);
    let numberTwo = Math.floor(Math.random() * 10);
    let operators = [{ sign: "+", method: function(n1, n2){ return n1 + n2; } }, { sign: "-", method: function(n1, n2) { return n1 - n2; } }];
    let selectedOperator = Math.floor(Math.random() * operators.length);

    let sign = (operators[selectedOperator].sign);
    let realAnswer = operators[selectedOperator].method(numberOne, numberTwo)

    let minRange = realAnswer - 3;
    let maxRange = realAnswer + 3;
    let answer = Math.floor(Math.random() * (maxRange - minRange) + minRange);

    console.log("Real Answer: " + realAnswer);

    this.setState({
      numberOne,
      numberTwo,
      sign,
      realAnswer,
      answer
    })
  }



  checkIfRight = () => {
    const {realAnswer, answer, score} = this.state;

    let newScore = score;

    if (answer === realAnswer) { // correct
      newScore++;
      this.setState({
        score: newScore
      })
      this.setQuestion();
      clearInterval(progress)
      this.timerCountDown();
    } else { // wrong
      this.setState({gameOver: true})
    }
  }

  checkIfWrong = () => {
    const {realAnswer, answer, score} = this.state;

    let newScore = score;

    if (answer === realAnswer) { // wrong
      this.setState({gameOver: true})
    } else { // correct
      newScore++;
      this.setState({
        score: newScore
      })
      this.setQuestion();
      clearInterval(progress)
      this.timerCountDown();
    }
  }

  timerCountDown = () => {
    let elem = document.getElementById('timerProgress');
    let width = 0;

    progress = setInterval((move) => {
      if (width >= 100) {
        clearInterval(progress);
      } else {
        width++;
        elem.style.width = width + '%';
      }
      if (width === 100) {
        this.setState({
          gameOver: true
        });
      }
    }, 40);
  }

  restartGame = () => {
    window.location.reload();
  }

  render() {
    return (
      <div>
        {
          this.state.gameOver === false ? (
            <div>
              <Timer time={this.state.time}/>
              <Question
                numberOne={this.state.numberOne}
                numberTwo={this.state.numberTwo}
                sign={this.state.sign}
                />
              <Answer answer={this.state.answer}/>
              <YesNo
                checkIfRight={this.checkIfRight}
                checkIfWrong={this.checkIfWrong}
                />
              <Score score={this.state.score}/>
            </div>
          ) : (
            <GameOver
              finalScore={this.state.score}
              restartGame={this.restartGame}
            />
          )
        }
      </div>
    );
  }

}

export default MainScreen;
