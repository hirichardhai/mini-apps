'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    };

    // Bind play function to App component
    _this.play = _this.play.bind(_this);
    return _this;
  }

  // Starts new game


  _createClass(App, [{
    key: 'initBoard',
    value: function initBoard() {
      // Create a blank 6x7 matrix
      var board = [];
      for (var r = 0; r < 6; r++) {
        var row = [];
        for (var c = 0; c < 7; c++) {
          row.push(null);
        }
        board.push(row);
      }

      this.setState({
        board: board,
        currentPlayer: this.state.player1,
        gameOver: false,
        message: ''
      });
    }
  }, {
    key: 'togglePlayer',
    value: function togglePlayer() {
      return this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1;
    }
  }, {
    key: 'play',
    value: function play(c) {
      if (!this.state.gameOver) {
        // Place piece on board
        var board = this.state.board;
        for (var r = 5; r >= 0; r--) {
          if (!board[r][c]) {
            board[r][c] = this.state.currentPlayer;
            break;
          }
        }

        // Check status of board
        var result = this.checkAll(board);
        if (result === this.state.player1) {
          this.setState({ board: board, gameOver: true, message: 'Player 1 (red) wins!' });
        } else if (result === this.state.player2) {
          this.setState({ board: board, gameOver: true, message: 'Player 2 (yellow) wins!' });
        } else if (result === 'draw') {
          this.setState({ board: board, gameOver: true, message: 'Draw game.' });
        } else {
          this.setState({ board: board, currentPlayer: this.togglePlayer() });
        }
      } else {
        this.setState({ message: 'Game over. Please start a new game.' });
      }
    }
  }, {
    key: 'checkVertical',
    value: function checkVertical(board) {
      // Check only if row is 3 or greater
      for (var r = 3; r < 6; r++) {
        for (var c = 0; c < 7; c++) {
          if (board[r][c]) {
            if (board[r][c] === board[r - 1][c] && board[r][c] === board[r - 2][c] && board[r][c] === board[r - 3][c]) {
              return board[r][c];
            }
          }
        }
      }
    }
  }, {
    key: 'checkHorizontal',
    value: function checkHorizontal(board) {
      // Check only if column is 3 or less
      for (var r = 0; r < 6; r++) {
        for (var c = 0; c < 4; c++) {
          if (board[r][c]) {
            if (board[r][c] === board[r][c + 1] && board[r][c] === board[r][c + 2] && board[r][c] === board[r][c + 3]) {
              return board[r][c];
            }
          }
        }
      }
    }
  }, {
    key: 'checkDiagonalRight',
    value: function checkDiagonalRight(board) {
      // Check only if row is 3 or greater AND column is 3 or less
      for (var r = 3; r < 6; r++) {
        for (var c = 0; c < 4; c++) {
          if (board[r][c]) {
            if (board[r][c] === board[r - 1][c + 1] && board[r][c] === board[r - 2][c + 2] && board[r][c] === board[r - 3][c + 3]) {
              return board[r][c];
            }
          }
        }
      }
    }
  }, {
    key: 'checkDiagonalLeft',
    value: function checkDiagonalLeft(board) {
      // Check only if row is 3 or greater AND column is 3 or greater
      for (var r = 3; r < 6; r++) {
        for (var c = 3; c < 7; c++) {
          if (board[r][c]) {
            if (board[r][c] === board[r - 1][c - 1] && board[r][c] === board[r - 2][c - 2] && board[r][c] === board[r - 3][c - 3]) {
              return board[r][c];
            }
          }
        }
      }
    }
  }, {
    key: 'checkDraw',
    value: function checkDraw(board) {
      for (var r = 0; r < 6; r++) {
        for (var c = 0; c < 7; c++) {
          if (board[r][c] === null) {
            return null;
          }
        }
      }
      return 'draw';
    }
  }, {
    key: 'checkAll',
    value: function checkAll(board) {
      return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.initBoard();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'button', onClick: function onClick() {
              _this2.initBoard();
            } },
          'New Game'
        ),
        React.createElement(
          'table',
          null,
          React.createElement('thead', null),
          React.createElement(
            'tbody',
            null,
            this.state.board.map(function (row, i) {
              return React.createElement(Row, { key: i, row: row, play: _this2.play });
            })
          )
        ),
        React.createElement(
          'p',
          { className: 'message' },
          this.state.message
        )
      );
    }
  }]);

  return App;
}(React.Component);

// Row component


var Row = function Row(_ref) {
  var row = _ref.row,
      play = _ref.play;

  return React.createElement(
    'tr',
    null,
    row.map(function (cell, i) {
      return React.createElement(Cell, { key: i, value: cell, columnIndex: i, play: play });
    })
  );
};

var Cell = function Cell(_ref2) {
  var value = _ref2.value,
      columnIndex = _ref2.columnIndex,
      play = _ref2.play;

  var color = 'white';
  if (value === 1) {
    color = 'red';
  } else if (value === 2) {
    color = 'yellow';
  }

  return React.createElement(
    'td',
    null,
    React.createElement(
      'div',
      { className: 'cell', onClick: function onClick() {
          play(columnIndex);
        } },
      React.createElement('div', { className: color })
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwicGxheWVyMSIsInBsYXllcjIiLCJjdXJyZW50UGxheWVyIiwiYm9hcmQiLCJnYW1lT3ZlciIsIm1lc3NhZ2UiLCJwbGF5IiwiYmluZCIsInIiLCJyb3ciLCJjIiwicHVzaCIsInNldFN0YXRlIiwicmVzdWx0IiwiY2hlY2tBbGwiLCJ0b2dnbGVQbGF5ZXIiLCJjaGVja1ZlcnRpY2FsIiwiY2hlY2tEaWFnb25hbFJpZ2h0IiwiY2hlY2tEaWFnb25hbExlZnQiLCJjaGVja0hvcml6b250YWwiLCJjaGVja0RyYXciLCJpbml0Qm9hcmQiLCJtYXAiLCJpIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSb3ciLCJjZWxsIiwiQ2VsbCIsInZhbHVlIiwiY29sdW1uSW5kZXgiLCJjb2xvciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLENBREU7QUFFWEMsZUFBUyxDQUZFO0FBR1hDLHFCQUFlLElBSEo7QUFJWEMsYUFBTyxFQUpJO0FBS1hDLGdCQUFVLEtBTEM7QUFNWEMsZUFBUztBQU5FLEtBQWI7O0FBU0E7QUFDQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLE9BQVo7QUFiaUI7QUFjbEI7O0FBRUQ7Ozs7O2dDQUNZO0FBQ1Y7QUFDQSxVQUFJSixRQUFRLEVBQVo7QUFDQSxXQUFLLElBQUlLLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUIsWUFBSUMsTUFBTSxFQUFWO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRC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WUFBUSxLQUFSO0FBQ0QsR0FGRCxNQUVPLElBQUlGLFVBQVUsQ0FBZCxFQUFpQjtBQUN0QkUsWUFBUSxRQUFSO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLE1BQWYsRUFBc0IsU0FBUyxtQkFBTTtBQUFDekIsZUFBS3dCLFdBQUw7QUFBa0IsU0FBeEQ7QUFDRSxtQ0FBSyxXQUFXQyxLQUFoQjtBQURGO0FBREYsR0FERjtBQU9ELENBZkQ7O0FBaUJBQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekI7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGF5ZXIxOiAxLFxuICAgICAgcGxheWVyMjogMixcbiAgICAgIGN1cnJlbnRQbGF5ZXI6IG51bGwsXG4gICAgICBib2FyZDogW10sXG4gICAgICBnYW1lT3ZlcjogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnJ1xuICAgIH07XG4gICAgXG4gICAgLy8gQmluZCBwbGF5IGZ1bmN0aW9uIHRvIEFwcCBjb21wb25lbnRcbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgLy8gU3RhcnRzIG5ldyBnYW1lXG4gIGluaXRCb2FyZCgpIHtcbiAgICAvLyBDcmVhdGUgYSBibGFuayA2eDcgbWF0cml4XG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA2OyByKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNzsgYysrKSB7IHJvdy5wdXNoKG51bGwpIH1cbiAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBib2FyZCxcbiAgICAgIGN1cnJlbnRQbGF5ZXI6IHRoaXMuc3RhdGUucGxheWVyMSxcbiAgICAgIGdhbWVPdmVyOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICcnXG4gICAgfSk7XG4gIH1cbiAgXG4gIHRvZ2dsZVBsYXllcigpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuY3VycmVudFBsYXllciA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXIxKSA/IHRoaXMuc3RhdGUucGxheWVyMiA6IHRoaXMuc3RhdGUucGxheWVyMTtcbiAgfVxuICBcbiAgcGxheShjKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmdhbWVPdmVyKSB7XG4gICAgICAvLyBQbGFjZSBwaWVjZSBvbiBib2FyZFxuICAgICAgbGV0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICAgIGZvciAobGV0IHIgPSA1OyByID49IDA7IHItLSkge1xuICAgICAgICBpZiAoIWJvYXJkW3JdW2NdKSB7XG4gICAgICAgICAgYm9hcmRbcl1bY10gPSB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgc3RhdHVzIG9mIGJvYXJkXG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5jaGVja0FsbChib2FyZCk7XG4gICAgICBpZiAocmVzdWx0ID09PSB0aGlzLnN0YXRlLnBsYXllcjEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkLCBnYW1lT3ZlcjogdHJ1ZSwgbWVzc2FnZTogJ1BsYXllciAxIChyZWQpIHdpbnMhJyB9KTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSB0aGlzLnN0YXRlLnBsYXllcjIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkLCBnYW1lT3ZlcjogdHJ1ZSwgbWVzc2FnZTogJ1BsYXllciAyICh5ZWxsb3cpIHdpbnMhJyB9KTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnZHJhdycpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkLCBnYW1lT3ZlcjogdHJ1ZSwgbWVzc2FnZTogJ0RyYXcgZ2FtZS4nIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkLCBjdXJyZW50UGxheWVyOiB0aGlzLnRvZ2dsZVBsYXllcigpIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogJ0dhbWUgb3Zlci4gUGxlYXNlIHN0YXJ0IGEgbmV3IGdhbWUuJyB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrVmVydGljYWwoYm9hcmQpIHtcbiAgICAvLyBDaGVjayBvbmx5IGlmIHJvdyBpcyAzIG9yIGdyZWF0ZXJcbiAgICBmb3IgKGxldCByID0gMzsgciA8IDY7IHIrKykge1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA3OyBjKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NdKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gMV1bY10gJiZcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAyXVtjXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDNdW2NdKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmRbcl1bY107ICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY2hlY2tIb3Jpem9udGFsKGJvYXJkKSB7XG4gICAgLy8gQ2hlY2sgb25seSBpZiBjb2x1bW4gaXMgMyBvciBsZXNzXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA2OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNDsgYysrKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjXSkge1xuICAgICAgICAgIGlmIChib2FyZFtyXVtjXSA9PT0gYm9hcmRbcl1bYyArIDFdICYmIFxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbcl1bYyArIDJdICYmXG4gICAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyXVtjICsgM10pIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZFtyXVtjXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrRGlhZ29uYWxSaWdodChib2FyZCkge1xuICAgIC8vIENoZWNrIG9ubHkgaWYgcm93IGlzIDMgb3IgZ3JlYXRlciBBTkQgY29sdW1uIGlzIDMgb3IgbGVzc1xuICAgIGZvciAobGV0IHIgPSAzOyByIDwgNjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDQ7IGMrKykge1xuICAgICAgICBpZiAoYm9hcmRbcl1bY10pIHtcbiAgICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAxXVtjICsgMV0gJiZcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAyXVtjICsgMl0gJiZcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAzXVtjICsgM10pIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZFtyXVtjXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrRGlhZ29uYWxMZWZ0KGJvYXJkKSB7XG4gICAgLy8gQ2hlY2sgb25seSBpZiByb3cgaXMgMyBvciBncmVhdGVyIEFORCBjb2x1bW4gaXMgMyBvciBncmVhdGVyXG4gICAgZm9yIChsZXQgciA9IDM7IHIgPCA2OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAzOyBjIDwgNzsgYysrKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjXSkge1xuICAgICAgICAgIGlmIChib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDFdW2MgLSAxXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDJdW2MgLSAyXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDNdW2MgLSAzXSkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkW3JdW2NdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY2hlY2tEcmF3KGJvYXJkKSB7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA2OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNzsgYysrKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjXSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZHJhdyc7ICAgIFxuICB9XG4gIFxuICBjaGVja0FsbChib2FyZCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrVmVydGljYWwoYm9hcmQpIHx8IHRoaXMuY2hlY2tEaWFnb25hbFJpZ2h0KGJvYXJkKSB8fCB0aGlzLmNoZWNrRGlhZ29uYWxMZWZ0KGJvYXJkKSB8fCB0aGlzLmNoZWNrSG9yaXpvbnRhbChib2FyZCkgfHwgdGhpcy5jaGVja0RyYXcoYm9hcmQpO1xuICB9XG4gIFxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5pbml0Qm9hcmQoKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmluaXRCb2FyZCgpfX0+TmV3IEdhbWU8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5ib2FyZC5tYXAoKHJvdywgaSkgPT4gKDxSb3cga2V5PXtpfSByb3c9e3Jvd30gcGxheT17dGhpcy5wbGF5fSAvPikpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e3RoaXMuc3RhdGUubWVzc2FnZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIFJvdyBjb21wb25lbnRcbmNvbnN0IFJvdyA9ICh7IHJvdywgcGxheSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRyPlxuICAgICAge3Jvdy5tYXAoKGNlbGwsIGkpID0+IDxDZWxsIGtleT17aX0gdmFsdWU9e2NlbGx9IGNvbHVtbkluZGV4PXtpfSBwbGF5PXtwbGF5fSAvPil9XG4gICAgPC90cj5cbiAgKTtcbn07XG5cbmNvbnN0IENlbGwgPSAoeyB2YWx1ZSwgY29sdW1uSW5kZXgsIHBsYXkgfSkgPT4ge1xuICBsZXQgY29sb3IgPSAnd2hpdGUnO1xuICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICBjb2xvciA9ICdyZWQnO1xuICB9IGVsc2UgaWYgKHZhbHVlID09PSAyKSB7XG4gICAgY29sb3IgPSAneWVsbG93JztcbiAgfVxuICAgIFxuICByZXR1cm4gKFxuICAgIDx0ZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiIG9uQ2xpY2s9eygpID0+IHtwbGF5KGNvbHVtbkluZGV4KX19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29sb3J9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC90ZD5cbiAgKTtcbn07XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbi8vIGNoZWNrUm93cyhib2FyZCwgaWQsIGNvbG9yKSB7XG4vLyAgIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpXG4vLyAgIHZhciByb3dJZCA9IE1hdGguZmxvb3IocmVhbElkLzcpO1xuLy8gICB2YXIgcm93ID0gYm9hcmRbcm93SWRdIFxuXG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4vLyAgICAgdmFyIGNvbG9yVG90YWwgPSAwXG4vLyAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbi8vICAgICAgIGlmICgoaStqIDwgNykgJiYgKGkraiA+PSAwKSAmJiAocm93W2kgKyBqXSAhPT0gdW5kZWZpbmVkKSAmJiAocm93W2kgKyBqXSA9PSBjb2xvcikpIHtcbi8vICAgICAgICAgY29sb3JUb3RhbCsrO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4vLyAvLyAgICAgICB3aW5uZXIoY29sb3IpO1xuLy8gY29uc29sZS5sb2coJ3Jvd3Mgd29yaycpXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGNoZWNrQ29sdW1ucyhib2FyZCwgaWQsIGNvbG9yKSB7XG4vLyAgIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpO1xuLy8gICB2YXIgY29sdW1uID0gcmVhbElkICUgNztcbiAgXG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4vLyAgICAgdmFyIGNvbG9yVG90YWwgPSAwO1xuLy8gICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4vLyAgICAgICBpZiAoKGkraiA8IDYpICYmIChpK2ogPj0gMCkgJiYgKGJvYXJkW2kgKyBqXVtjb2x1bW5dICE9PSB1bmRlZmluZWQpICYmIChib2FyZFtpICsgal1bY29sdW1uXSA9PSBjb2xvcikpIHtcbi8vICAgICAgICAgY29sb3JUb3RhbCsrO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4vLyAvLyAgICAgICB3aW5uZXIoY29sb3IpO1xuLy8gY29uc29sZS5sb2coJ2NvbHVtbnMgd29yaycpXG5cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gY2hlY2tNYWpvckRpYWdvbmFsKGJvYXJkLCBpZCwgY29sb3IpIHtcbi8vICAgdmFyIHJlYWxJZCA9IE51bWJlcihpZCk7XG4vLyAgIHZhciBjb2x1bW4gPSByZWFsSWQgJSA3O1xuLy8gICB2YXIgcm93ID0gTWF0aC5mbG9vcihyZWFsSWQvNyk7XG4vLyAgIHZhciBzdGFydGluZ0NvbHVtbiA9IGNvbHVtbiAtIHJvdztcblxuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuLy8gICAgIHZhciBjb2xvclRvdGFsID0gMDtcbi8vICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuLy8gICAgICAgaWYgKChzdGFydGluZ0NvbHVtbiArIGopID49IDAgJiYgKHN0YXJ0aW5nQ29sdW1uICsgaikgPCA3ICYmIGkraiA8IDcgJiYgYm9hcmRbaStqXSAhPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAgIGlmIChib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gKyBqXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiArIGpdID09IGNvbG9yKSB7XG4vLyAgICAgICAgICAgY29sb3JUb3RhbCsrXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuLy8gICAgICAgY29uc29sZS5sb2coJ3dvbiEhISBtYWpvciBkaWFnb25hbCEnKTtcbi8vICAgICAgIC8vIHdpbm5lcihjb2xvcik7XG4vLyAgICAgfVxuLy8gICAgIHN0YXJ0aW5nQ29sdW1uKytcbi8vICAgfVxuLy8gfVxuXG4vLyBjaGVja01pbm9yRGlhZ29uYWwoYm9hcmQsIGlkLCBjb2xvcikge1xuLy8gICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbi8vICAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4vLyAgIHZhciByb3cgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbi8vICAgdmFyIHN0YXJ0aW5nQ29sdW1uID0gY29sdW1uICsgcm93XG5cbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbi8vICAgICB2YXIgY29sb3JUb3RhbCA9IDA7XG4vLyAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbi8vICAgICAgIGlmICgoc3RhcnRpbmdDb2x1bW4gLSBqKSA+PSAwICYmIChzdGFydGluZ0NvbHVtbiAtIGopIDwgNyAmJiAoaSArIGogPCA3KSAmJiBib2FyZFtpK2pdICE9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgICAgaWYgKGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiAtIGpdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbaSArIGpdW3N0YXJ0aW5nQ29sdW1uIC0gal0gPT0gY29sb3IpIHtcbi8vICAgICAgICAgICBjb2xvclRvdGFsKytcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4vLyAgICAgY29uc29sZS5sb2coJ3dvbiBtaW5vciBkaWFnb25hbCcpXG4vLyAgICAgLy8gd2lubmVyKGNvbG9yKTtcbi8vICAgfVxuLy8gICAgIHN0YXJ0aW5nQ29sdW1uLS1cbi8vICAgfVxuLy8gfVxuXG4vLyBjaGVja1dpbm5lcihib2FyZCwgaWQsIGNvbG9yKSB7XG4vLyAgIHRoaXMuY2hlY2tSb3dzKGJvYXJkLCBpZCwgY29sb3IpO1xuLy8gICB0aGlzLmNoZWNrQ29sdW1ucyhib2FyZCwgaWQsIGNvbG9yKTtcbi8vICAgdGhpcy5jaGVja01ham9yRGlhZ29uYWwoYm9hcmQsIGlkLCBjb2xvcik7XG4vLyAgIHRoaXMuY2hlY2tNaW5vckRpYWdvbmFsKGJvYXJkLCBpZCwgY29sb3IpO1xuLy8gfVxuIl19