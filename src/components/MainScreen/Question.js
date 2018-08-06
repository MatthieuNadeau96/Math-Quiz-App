import React, { Component } from 'react';

class Question extends Component {

  //grab a random number for x1
  //grab a random number for x2
  //grab a random symbol for the equation


  render() {
    return (
      <div className="questionEquation">
        <p>{this.props.numberOne} {this.props.sign} {this.props.numberTwo}</p>
      </div>
    );
  }

}

export default Question;
