import React, {Component} from 'react';
import ReactDom from 'react-dom';
import quizQuestionsE from 'quizQuestionsE';
import quizQuestionsM from 'quizQuestionsM';
import quizQuestionsH from 'quizQuestionsH';
import update from 'immutability-helper';
import Quiz from 'Quiz';
import Result from 'Result'
import ButtonChoice from 'ButtonChoice'
import QuestionCount from 'QuestionCount'
export class Game extends React.Component {
constructor(props) {
    super(props);

    this.state = {
     counter: 0,
     questionId: 1,
     counterM: 0,
     questionIdM: 1,
     countH: 0,
     questionIdH: 1,
     questionE: '',
     answerOptionsE: [],
     questionM: '',
     answerOptionsM: [],
     questionH: '',
     answerOptionsH: [],
     answer: '',
     Incorrect: 0,
     Correct: 0,
     gamePoint: 0,
     result: 'Won',
     totalQuestion: 0,
     selectedOption: "",
     hasChosen: "false",
     color: "#ffffff"
    };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.onClick = this.onClick.bind(this);
  }
    componentWillMount() {
    const shuffledAnswerOptionsE = quizQuestionsE.map((question) => this.shuffleArray(question.answers));
    const shuffledAnswerOptionsM = quizQuestionsM.map((question) => this.shuffleArray(question.answers));
    const shuffledAnswerOptionsH = quizQuestionsH.map((question) => this.shuffleArray(question.answers));
    this.setState({
      questionE: quizQuestionsE[0].question,
      answerOptionsE: shuffledAnswerOptionsE[0],
      questionM: quizQuestionsM[0].question,
      answerOptionsM: shuffledAnswerOptionsM[0],
      questionH: quizQuestionsH[0].question,
      answerOptionsH: shuffledAnswerOptionsH[0],
      totalQuestion: quizQuestionsE.length + quizQuestionsM.length + quizQuestionsH.length
    });
  };
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  setUserAnswer(answer) {
    if(answer === "Correct"){
      this.setState({
        Correct: this.state.Correct + 1,
        color: "#00ff00"
      })
    }
    if(answer === "Incorrect"){
      this.setState({
        Incorrect: this.state.Incorrect - 1,
        color: "#FF0000"
      })
    }

  }
  setPoints =() =>{
    const pointsCorrect = this.state.Correct;
    const pointsIncorrect = this.state.Incorrect;
    const points = pointsCorrect + pointsIncorrect;
    this.setState({
      gamePoint: points
    })
  }
  setNextQuestion() {
    this.setPoints();
    //easy
    if(this.state.selectedOption === "easy"){
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      questionE: quizQuestionsE[counter].question,
      answerOptionsE: quizQuestionsE[counter].answers,
      answer: '',
        hasChosen: "false"
    });
  }
    //medium
    if(this.state.selectedOption === "medium"){
    const counterM = this.state.counterM + 1;
    const questionIdM = this.state.questionIdM + 1;
    this.setState({
      counterM: counterM,
      questionIdM: questionIdM,
      questionE: quizQuestionsE[counterM].question,
      answerOptionsE: quizQuestionsE[counterM].answers,
      answer: '',
        hasChosen: "false"
    });
  }
    //hard
    if(this.state.selectedOption === "hard"){
    const counterH = this.state.counter + 1;
    const questionIdH = this.state.questionIdH+ 1;
    this.setState({
      counterH: counterH,
      questionIdH: questionIdH,
      questionH: quizQuestionsH[counterH].question,
      answerOptionsH: quizQuestionsH[counterH].answers,
      answer: '',
      hasChosen: "false"
    });
  }
  }
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

        this.setPoints();
        setTimeout(() => this.setNextQuestion(), 300);

  }
  setResults () {
     if (this.state.gamePoint ===5) {
       this.setState({ result: 'Lost' });
     }
   }
  renderQuiz() {
      return (
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptionsE}
          questionId={this.state.questionId}
          question={this.state.questionE}
          questionTotal={quizQuestionsE.length}
          gamePoint = {this.state.gamePoint}
          onAnswerSelected={this.handleAnswerSelected}

        />
      );
    }

   onClick = (e) => {
     this.setState({
       selectedOption: e.target.id,
       hasChosen: "true"
     });
   }
   renderChoice(){
     return(
       <ButtonChoice onClick = {(e) => this.onClick(e) }/>
     );
   }

  render() {
    return (
      <div>
        <div>
          <QuestionCount
            counter={this.state.questionId}
            total={this.state.totalQuestion}
            points = {this.state.gamePoint}
            color = {this.state.color}
          />
        </div>
        {this.state.hasChosen === "false" ? this.renderChoice() : this.renderQuiz()}


      </div>
    )

  }

};

module.exports = Game;
