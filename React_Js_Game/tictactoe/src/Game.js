import React, {Component} from 'react';
import Board from "./Component/board";
import './Game.css'
import calculateWiner from "./Helper/calculateWiner";

class Game extends Component {

  constructor(){
    super();
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{
        squares: Array(9).fill(null)
      }]
    };
  }

  handleClick = (i) => {
    const {xIsNext, history} = this.state;
    const current = history[history.length - 1];
    // const squares = current.squares.slice();
    const squares = [...current.squares];

    if (calculateWiner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : '0';

    this.setState({
      xIsNext: !xIsNext,
      // history: history.concat([{squares}]),
      history: [...history, {squares}],
      stepNumber: ++this.state.stepNumber
    })

  };

  paintMoves () {
    return this.state.history.map((step, move) => {
      const desc = move ? ('Move #' + move) : 'Game start';
      return (
          <li key={move}>
            <a href='#' onClick={()=>{this.jumpTo(move)}}>{desc}</a>
          </li>
      )
    })
  }

  jumpTo (step) {
    this.setState({
    stepNumber: step,
    xIsNext: (step % 2 ) ? false : true,
  })};


  render() {
    const {xIsNext, stepNumber, history} = this.state;
    const current = history[stepNumber];
    let winner = calculateWiner(current.squares);
    let status;

    if (winner) {
      status = 'Winner ' + winner
    } else {
      status = 'Next player is: ' + (xIsNext ? 'X' : '0')
    }

    return (
        <div className='game'>
          <div className='game-board'>
            <Board
                squares={current.squares}
                onClick={this.handleClick}
            />
          </div>
          <div className='game-info'>
            <div>{status}</div>
            <div>{this.paintMoves()}</div>
          </div>
        </div>
    );
  }
}

export default Game;
