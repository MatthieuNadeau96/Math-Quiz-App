import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div className="question">
        <p>{this.props.numberOne} {this.props.sign} {this.props.numberTwo}</p>
      </div>
    );
  }

}

export default Question;
