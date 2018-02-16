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

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcDIuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY3VycmVudFBsYXllciIsImJvYXJkIiwiZ2FtZU92ZXIiLCJtZXNzYWdlIiwicGxheSIsImJpbmQiLCJyIiwicm93IiwiYyIsInB1c2giLCJzZXRTdGF0ZSIsInJlc3VsdCIsImNoZWNrQWxsIiwidG9nZ2xlUGxheWVyIiwiY2hlY2tWZXJ0aWNhbCIsImNoZWNrRGlhZ29uYWxSaWdodCIsImNoZWNrRGlhZ29uYWxMZWZ0IiwiY2hlY2tIb3Jpem9udGFsIiwiY2hlY2tEcmF3IiwiaW5pdEJvYXJkIiwibWFwIiwiaSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUm93IiwiY2VsbCIsIkNlbGwiLCJ2YWx1ZSIsImNvbHVtbkluZGV4IiwiY29sb3IiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxDQURFO0FBRVhDLGVBQVMsQ0FGRTtBQUdYQyxxQkFBZSxJQUhKO0FBSVhDLGFBQU8sRUFKSTtBQUtYQyxnQkFBVSxLQUxDO0FBTVhDLGVBQVM7QUFORSxLQUFiOztBQVNBO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUMsSUFBVixPQUFaO0FBYmlCO0FBY2xCOztBQUVEOzs7OztnQ0FDWTtBQUNWO0FBQ0EsVUFBSUosUUFBUSxFQUFaO0FBQ0EsV0FBSyxJQUFJSyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQzFCLFlBQUlDLE1BQU0sRUFBVjtBQUNBLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0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LFlBQVEsS0FBUjtBQUNELEdBRkQsTUFFTyxJQUFJRixVQUFVLENBQWQsRUFBaUI7QUFDdEJFLFlBQVEsUUFBUjtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxNQUFmLEVBQXNCLFNBQVMsbUJBQU07QUFBQ3pCLGVBQUt3QixXQUFMO0FBQWtCLFNBQXhEO0FBQ0UsbUNBQUssV0FBV0MsS0FBaEI7QUFERjtBQURGLEdBREY7QUFPRCxDQWZEOztBQWlCQUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXpCIiwiZmlsZSI6ImFwcDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWVyMTogMSxcbiAgICAgIHBsYXllcjI6IDIsXG4gICAgICBjdXJyZW50UGxheWVyOiBudWxsLFxuICAgICAgYm9hcmQ6IFtdLFxuICAgICAgZ2FtZU92ZXI6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJydcbiAgICB9O1xuICAgIFxuICAgIC8vIEJpbmQgcGxheSBmdW5jdGlvbiB0byBBcHAgY29tcG9uZW50XG4gICAgdGhpcy5wbGF5ID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7XG4gIH1cbiAgXG4gIC8vIFN0YXJ0cyBuZXcgZ2FtZVxuICBpbml0Qm9hcmQoKSB7XG4gICAgLy8gQ3JlYXRlIGEgYmxhbmsgNng3IG1hdHJpeFxuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgNjsgcisrKSB7XG4gICAgICBsZXQgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDc7IGMrKykgeyByb3cucHVzaChudWxsKSB9XG4gICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYm9hcmQsXG4gICAgICBjdXJyZW50UGxheWVyOiB0aGlzLnN0YXRlLnBsYXllcjEsXG4gICAgICBnYW1lT3ZlcjogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnJ1xuICAgIH0pO1xuICB9XG4gIFxuICB0b2dnbGVQbGF5ZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMuc3RhdGUucGxheWVyMSkgPyB0aGlzLnN0YXRlLnBsYXllcjIgOiB0aGlzLnN0YXRlLnBsYXllcjE7XG4gIH1cbiAgXG4gIHBsYXkoYykge1xuICAgIGlmICghdGhpcy5zdGF0ZS5nYW1lT3Zlcikge1xuICAgICAgLy8gUGxhY2UgcGllY2Ugb24gYm9hcmRcbiAgICAgIGxldCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgICBmb3IgKGxldCByID0gNTsgciA+PSAwOyByLS0pIHtcbiAgICAgICAgaWYgKCFib2FyZFtyXVtjXSkge1xuICAgICAgICAgIGJvYXJkW3JdW2NdID0gdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIHN0YXR1cyBvZiBib2FyZFxuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuY2hlY2tBbGwoYm9hcmQpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXIxKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCwgZ2FtZU92ZXI6IHRydWUsIG1lc3NhZ2U6ICdQbGF5ZXIgMSAocmVkKSB3aW5zIScgfSk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXIyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCwgZ2FtZU92ZXI6IHRydWUsIG1lc3NhZ2U6ICdQbGF5ZXIgMiAoeWVsbG93KSB3aW5zIScgfSk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RyYXcnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCwgZ2FtZU92ZXI6IHRydWUsIG1lc3NhZ2U6ICdEcmF3IGdhbWUuJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCwgY3VycmVudFBsYXllcjogdGhpcy50b2dnbGVQbGF5ZXIoKSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6ICdHYW1lIG92ZXIuIFBsZWFzZSBzdGFydCBhIG5ldyBnYW1lLicgfSk7XG4gICAgfVxuICB9XG4gIFxuICBjaGVja1ZlcnRpY2FsKGJvYXJkKSB7XG4gICAgLy8gQ2hlY2sgb25seSBpZiByb3cgaXMgMyBvciBncmVhdGVyXG4gICAgZm9yIChsZXQgciA9IDM7IHIgPCA2OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNzsgYysrKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjXSkge1xuICAgICAgICAgIGlmIChib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDFdW2NdICYmXG4gICAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gMl1bY10gJiZcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAzXVtjXSkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkW3JdW2NdOyAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrSG9yaXpvbnRhbChib2FyZCkge1xuICAgIC8vIENoZWNrIG9ubHkgaWYgY29sdW1uIGlzIDMgb3IgbGVzc1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgNjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDQ7IGMrKykge1xuICAgICAgICBpZiAoYm9hcmRbcl1bY10pIHtcbiAgICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09IGJvYXJkW3JdW2MgKyAxXSAmJiBcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3JdW2MgKyAyXSAmJlxuICAgICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbcl1bYyArIDNdKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmRbcl1bY107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBjaGVja0RpYWdvbmFsUmlnaHQoYm9hcmQpIHtcbiAgICAvLyBDaGVjayBvbmx5IGlmIHJvdyBpcyAzIG9yIGdyZWF0ZXIgQU5EIGNvbHVtbiBpcyAzIG9yIGxlc3NcbiAgICBmb3IgKGxldCByID0gMzsgciA8IDY7IHIrKykge1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA0OyBjKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NdKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gMV1bYyArIDFdICYmXG4gICAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gMl1bYyArIDJdICYmXG4gICAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gM11bYyArIDNdKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmRbcl1bY107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBjaGVja0RpYWdvbmFsTGVmdChib2FyZCkge1xuICAgIC8vIENoZWNrIG9ubHkgaWYgcm93IGlzIDMgb3IgZ3JlYXRlciBBTkQgY29sdW1uIGlzIDMgb3IgZ3JlYXRlclxuICAgIGZvciAobGV0IHIgPSAzOyByIDwgNjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gMzsgYyA8IDc7IGMrKykge1xuICAgICAgICBpZiAoYm9hcmRbcl1bY10pIHtcbiAgICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAxXVtjIC0gMV0gJiZcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAyXVtjIC0gMl0gJiZcbiAgICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAzXVtjIC0gM10pIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZFtyXVtjXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrRHJhdyhib2FyZCkge1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgNjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDc7IGMrKykge1xuICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ2RyYXcnOyAgICBcbiAgfVxuICBcbiAgY2hlY2tBbGwoYm9hcmQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja1ZlcnRpY2FsKGJvYXJkKSB8fCB0aGlzLmNoZWNrRGlhZ29uYWxSaWdodChib2FyZCkgfHwgdGhpcy5jaGVja0RpYWdvbmFsTGVmdChib2FyZCkgfHwgdGhpcy5jaGVja0hvcml6b250YWwoYm9hcmQpIHx8IHRoaXMuY2hlY2tEcmF3KGJvYXJkKTtcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuaW5pdEJvYXJkKCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5pbml0Qm9hcmQoKX19Pk5ldyBHYW1lPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYm9hcmQubWFwKChyb3csIGkpID0+ICg8Um93IGtleT17aX0gcm93PXtyb3d9IHBsYXk9e3RoaXMucGxheX0gLz4pKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICBcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBSb3cgY29tcG9uZW50XG5jb25zdCBSb3cgPSAoeyByb3csIHBsYXkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDx0cj5cbiAgICAgIHtyb3cubWFwKChjZWxsLCBpKSA9PiA8Q2VsbCBrZXk9e2l9IHZhbHVlPXtjZWxsfSBjb2x1bW5JbmRleD17aX0gcGxheT17cGxheX0gLz4pfVxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5jb25zdCBDZWxsID0gKHsgdmFsdWUsIGNvbHVtbkluZGV4LCBwbGF5IH0pID0+IHtcbiAgbGV0IGNvbG9yID0gJ3doaXRlJztcbiAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgY29sb3IgPSAncmVkJztcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gMikge1xuICAgIGNvbG9yID0gJ3llbGxvdyc7XG4gIH1cbiAgICBcbiAgcmV0dXJuIChcbiAgICA8dGQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIiBvbkNsaWNrPXsoKSA9PiB7cGxheShjb2x1bW5JbmRleCl9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbG9yfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGQ+XG4gICk7XG59O1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSk7Il19