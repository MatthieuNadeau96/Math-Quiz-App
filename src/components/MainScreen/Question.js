import React, { Component } from 'react';

class Question extends Component {

  state = {
    numberOne: undefined,
    numberTwo: undefined
  }

  //grab a random number for x1
  //grab a random number for x2
  //grab a random symbol for the equation

  componentDidMount() {
    let num1 = Math.floor(Math.random() * (20 - 0) + 0);
    let num2 = Math.floor(Math.random() * (20 - 0) + 0);
    this.setState({
      numberOne: num1,
      numberTwo: num2
    })
  }

  render() {
    return (
      <div className="questionEquation">
        <p>{this.state.numberOne} + {this.state.numberTwo}</p>
      </div>
    );
  }

}

export default Question;
