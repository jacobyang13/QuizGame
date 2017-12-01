import React from 'react';
import ReactDOM from 'react-dom';
import Square from 'Square';



export class Board extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: Array(25).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }
  renderSquare(i) {
    return <Square
      value = {this.state.squares[i]}
      onClick = {() => this.handleClick(i)}
      />;
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    }
    else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className = "center">
        <div className="status">{status}</div>
        <div className="board-row">

          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
        <div className="board-row">
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
        </div>
      </div>
    );
  }

}
function calculateWinner(squares) {
const lines = [
   [0, 1, 2, 3, 4],
   [5, 6, 7, 8, 9],
   [10, 11, 12, 13, 14],
   [15, 16, 17, 18, 19],
   [20, 21, 22, 23, 24],
   [0, 5, 10, 15, 20],
   [1, 6, 11, 16, 21],
   [2, 7, 12, 17, 22],
   [3, 8, 13, 18, 23],
   [4, 9, 14, 19, 24],
   [0, 6, 12, 18, 24],
   [4, 8, 12, 16, 20],





  // [0, 6, 12, 18, 24],
  // [4, 8, 12,16,20],
];
for (let i = 0; i < lines.length; i++) {
  const [a, b, c, d ,e] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
    return squares[a];
  }
}
return null;
}
module.exports = Board;
<NeighbourhoodReviews  bayviewR = {this.state.bayviewR},
  bayviewCount2 = {this.state.bayviewCount2},
  bernalR = {this.state.bernalR},
  bernalCount2 = {this.bernalCount2},
  chinaTownR = {this.state.chinaTownR},
  chinaTownC2 = {this.state.chinaTownC2},
  crockerR = {this.state.crockerR},
  crockerC2 = {this.state.crockerC2},
  diamondR = {this.state.diamondR},
  diamondC2 = {this.state.diamondC2},
  downtownR = {this.state.downtownR},
  downtownC2 = {this.state.downtownC2},
  excelsiorR = {this.state.excelsiorR},
  excelsiorC2 = {this.state.excelsiorC2},
  financialR = {this.state.financialR},
  financialC2 = {this.state.financialC2},
  glenR = {this.state.glenR},
  glenC2 = {this.state.glenC2},
  haightR = {this.state.haightR},
  haightC2 {this.state.haightC2},
  innerSunR =  {this.state.innerSunR},
  innerSunC2 = {this.state.innerSunC2},
  lakeShoreR = {this.state.lakeShoreR},
  lakeShoreC =  {this.state.lakeShoreC2},
  marinaR = {this.state.marinaR},
  marinaC2 = {this.state.marinaC2},
  missionR = {this.state.missionR},
  missionC2 = {this.state.missionsC2},
  nobR = {this.state.nobR},
  nobC2 = {this.state.nobC2},
  noeR = {this.state.noeR},
  noeC2 = {this.state.noeC2},
  northR = {this.state.northR},
  northC2 = {this.state.northC2},
  oceanR = {this.state.oceanR},
  oceanC2 = {this.state.oceanC2}.
  richmondR: 0.00,
  richmondC2: 0.00,
  outersR: 0.00,
  outersC2: 0.00,
  pacificR: 0.00,
  pacificC2: 0.00,
  parksideR: 0.00,
  parksideC2: 0.00,
  potrHillR: 0.00,
  potrHillC2: 0.00,
  presidioR: 0.00,
  presidioC2: 0.00,
  russianHillR: 0.00,
  russianHillC2: 0.00,
  seaCliffR: 0.00,
  seaCliffC2: 0.00,
  southBR: 0.00,
  southBC2: 0.00,
  twinPeaksR: 0.00,
  twinPeaksC2: 0.00,
  visitR: 0.00,
  visitC2: 0.00,
  westPortalR: 0.00,
  westPortalC2: 0.00,
  westernR: 0.00,
  westernC2: 0.00, />
