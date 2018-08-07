import React, { Component } from 'react';

class Answer extends Component {

  render() {
    return (
      <div className="answer">
        <p>{this.props.answer}</p>
      </div>
    );
  }

}

export default Answer;
