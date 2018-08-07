import React, { Component } from 'react';

class YesNo extends Component {

  render() {
    return (
      <div className="buttons">
        <button onClick={() => this.props.checkIfWrong()} className="no">No</button>
        <button onClick={() => this.props.checkIfRight()} className="yes">Yes</button>
      </div>
    );
  }

}

export default YesNo;
