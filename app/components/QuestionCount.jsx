import React, {Component} from 'react';
import ReactDom from 'react-dom';

  function QuestionCount(props) {
    return (
      <div   style = {{backgroundColor: props.color}}>
      <div className="questionCount">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </div>
      <div className = "questionCount">
        Points <span> {props.points}</span>
      </div>
    </div>
    );
  }

  export default QuestionCount;
