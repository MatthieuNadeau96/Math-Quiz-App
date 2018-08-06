import React, { Component } from 'react';

import Question from './Question';
import Answer from './Answer';
import YesNo from './YesNo';
import Score from './Score';
import Timer from './Timer';

class MainScreen extends Component {

  state = {
    time: 1,
    numberOne: undefined,
    numberTwo: undefined,
    sign: undefined,
    realAnswer: undefined,
    answer: undefined,
    score: 0
  }

  componentDidMount() {
    let numberOne = Math.floor(Math.random() * 20);
    let numberTwo = Math.floor(Math.random() * 20);
    let operators = [{ sign: "+", method: function(n1, n2){ return n1 + n2; } }, { sign: "-", method: function(n1, n2) { return n1 - n2; } }];
    let selectedOperator = Math.floor(Math.random() * operators.length);

    let sign = (operators[selectedOperator].sign);
    let realAnswer = operators[selectedOperator].method(numberOne, numberTwo)

    let answer = Math.floor(Math.random() * 20);

    console.log("Real Answer: " + realAnswer);

    this.setState({
      numberOne,
      numberTwo,
      sign,
      realAnswer,
      answer
    })
  }

  render() {
    return (
      <div>
        <Timer time={this.state.time}/>
        <Question
          numberOne={this.state.numberOne}
          numberTwo={this.state.numberTwo}
          sign={this.state.sign}/>
        <Answer answer={this.state.answer}/>
        <YesNo/>
        <Score score={this.state.score}/>
      </div>
    );
  }

}

export default MainScreen;
