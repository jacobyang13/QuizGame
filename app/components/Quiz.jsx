import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Question from 'Question'
import QuestionCount from 'QuestionCount';
import AnswerOption from 'AnswerOption';



function Quiz(props) {
  function renderAnswerOptions(key) {
      return (
        <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answer={props.answer}
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
        />
      );
    }

    return (
       <div className="quiz">
         <Question content={props.question} />
         <ul className="answerOptions">
           {props.answerOptions.map(renderAnswerOptions)}
         </ul>
       </div>
    );
  }


  export default Quiz;
