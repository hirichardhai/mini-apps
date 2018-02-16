class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    };
    
    // Bind play function to App component
    this.play = this.play.bind(this);
  }
  
  // Starts new game
  initBoard() {
    // Create a blank 6x7 matrix
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }
    
    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: ''
    });
  }
  
  togglePlayer() {
    return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
  }
  
  play(c) {
    if (!this.state.gameOver) {
      // Place piece on board
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      // Check status of board
      let result = this.checkAll(board);
      if (result === this.state.player1) {
        this.setState({ board, gameOver: true, message: 'Player 1 (red) wins!' });
      } else if (result === this.state.player2) {
        this.setState({ board, gameOver: true, message: 'Player 2 (yellow) wins!' });
      } else if (result === 'draw') {
        this.setState({ board, gameOver: true, message: 'Draw game.' });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    } else {
      this.setState({ message: 'Game over. Please start a new game.' });
    }
  }
  
  checkVertical(board) {
    // Check only if row is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
              board[r][c] === board[r - 2][c] &&
              board[r][c] === board[r - 3][c]) {
            return board[r][c];    
          }
        }
      }
    }
  }
  
  checkHorizontal(board) {
    // Check only if column is 3 or less
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] && 
              board[r][c] === board[r][c + 2] &&
              board[r][c] === board[r][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDiagonalRight(board) {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
              board[r][c] === board[r - 2][c + 2] &&
              board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDiagonalLeft(board) {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
              board[r][c] === board[r - 2][c - 2] &&
              board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';    
  }
  
  checkAll(board) {
    return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
  }
  
  componentWillMount() {
    this.initBoard();
  }
  
  render() {
    return (
      <div>
        <div className="button" onClick={() => {this.initBoard()}}>New Game</div>
        
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>
        
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

// Row component
const Row = ({ row, play }) => {
  return (
    <tr>
      {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
    </tr>
  );
};

const Cell = ({ value, columnIndex, play }) => {
  let color = 'white';
  if (value === 1) {
    color = 'red';
  } else if (value === 2) {
    color = 'yellow';
  }
    
  return (
    <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        <div className={color}></div>
      </div>
    </td>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));


// checkRows(board, id, color) {
//   var realId = Number(id)
//   var rowId = Math.floor(realId/7);
//   var row = board[rowId] 

//   for (var i = 0; i < 7; i++) {
//     var colorTotal = 0
//     for (var j = 0; j < 4; j++) {
//       if ((i+j < 7) && (i+j >= 0) && (row[i + j] !== undefined) && (row[i + j] == color)) {
//         colorTotal++;
//       }
//     }
//     if (colorTotal == 4) {
// //       winner(color);
// console.log('rows work')
//     }
//   }
// }

// checkColumns(board, id, color) {
//   var realId = Number(id);
//   var column = realId % 7;
  
//   for (var i = 0; i < 6; i++) {
//     var colorTotal = 0;
//     for (var j = 0; j < 4; j++) {
//       if ((i+j < 6) && (i+j >= 0) && (board[i + j][column] !== undefined) && (board[i + j][column] == color)) {
//         colorTotal++;
//       }
//     }
//     if (colorTotal == 4) {
// //       winner(color);
// console.log('columns work')

//     }
//   }
// }

// checkMajorDiagonal(board, id, color) {
//   var realId = Number(id);
//   var column = realId % 7;
//   var row = Math.floor(realId/7);
//   var startingColumn = column - row;

//   for (var i = 0; i < 6; i++) {
//     var colorTotal = 0;
//     for (var j = 0; j < 4; j++) {
//       if ((startingColumn + j) >= 0 && (startingColumn + j) < 7 && i+j < 7 && board[i+j] !== undefined) {
//         if (board[i + j][startingColumn + j] !== undefined && board[i + j][startingColumn + j] == color) {
//           colorTotal++
//         }
//       }
//     }
//     if (colorTotal == 4) {
//       console.log('won!!! major diagonal!');
//       // winner(color);
//     }
//     startingColumn++
//   }
// }

// checkMinorDiagonal(board, id, color) {
//   var realId = Number(id);
//   var column = realId % 7;
//   var row = Math.floor(realId/7);
//   var startingColumn = column + row

//   for (var i = 0; i < 6; i++) {
//     var colorTotal = 0;
//     for (var j = 0; j < 4; j++) {
//       if ((startingColumn - j) >= 0 && (startingColumn - j) < 7 && (i + j < 7) && board[i+j] !== undefined) {
//         if (board[i + j][startingColumn - j] !== undefined && board[i + j][startingColumn - j] == color) {
//           colorTotal++
//         }
//       }
//     }
//     if (colorTotal == 4) {
//     console.log('won minor diagonal')
//     // winner(color);
//   }
//     startingColumn--
//   }
// }

// checkWinner(board, id, color) {
//   this.checkRows(board, id, color);
//   this.checkColumns(board, id, color);
//   this.checkMajorDiagonal(board, id, color);
//   this.checkMinorDiagonal(board, id, color);
// }
