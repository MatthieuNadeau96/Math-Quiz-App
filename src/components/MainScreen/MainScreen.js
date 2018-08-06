import React, { Component } from 'react';

import Question from './Question';
import Answer from './Answer';

class MainScreen extends Component {

  state = {
    numberOne: undefined,
    numberTwo: undefined,
    sign: undefined,
    realAnswer: undefined,
    answer: undefined
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
        <p>Timer Bar</p>
        <Question
          numberOne={this.state.numberOne}
          numberTwo={this.state.numberTwo}
          sign={this.state.sign}/>
        <Answer answer={this.state.answer}/>
        <p>No</p><p>Yes</p>
        <p>Score: 0</p>
      </div>
    );
  }

}

export default MainScreen;
