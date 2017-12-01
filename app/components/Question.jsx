import React, {Component} from 'react';
import ReactDom from 'react-dom';

 function Question(props) {
   return (
     <h2 className="question">{props.content}</h2>
   );
 }

 export default Question;
