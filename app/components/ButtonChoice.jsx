import React from 'react';
import ReactDOM from 'react-dom';

export class ButtonChoice extends React.Component {



  render() {
    return (
      <div className = "centered">
        <p>Choose the difficulity of your question</p>
      <div className="button-group centered">
        <a className="button" id = "easy" onClick = {(e) => this.props.onClick(e)}>Easy</a>
        <a className="button" id = "medium" onClick = {(e)=> this.props.onClick(e)}>Medium</a>
        <a className="button" id = "hard" onClick = {(e) => this.props.onClick(e)}>Hard</a>
      </div>
    </div>
    );
  }
}

module.exports = ButtonChoice;
