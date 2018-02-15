'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function App(props) {
  return React.createElement(
    'div',
    { style: { textAlign: "center" } },
    React.createElement(Table, null)
  );
};
var globalBoard;

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {
      board: [[], [], [], [], [], []],
      board2: [],
      rowSize: 6,
      columnSize: 7,
      colors: ['white', 'red', 'yellow'],
      colorBoolean: 0
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'changeCellColor',
    value: function changeCellColor(id) {
      if (this.state.colorBoolean == 0) {
        this.setState({
          colorBoolean: 1
        });
      }
      if (this.state.colorBoolean == 1) {
        this.setState({
          colorBoolean: 2
        });
      }
      if (this.state.colorBoolean == 2) {
        this.setState({
          colorBoolean: 1
        });
      }
      this.addCoordinateToBoard(id - 1);
      console.log('clicked');
    }
  }, {
    key: 'addCoordinateToBoard',
    value: function addCoordinateToBoard(id) {
      var realId = Number(id);
      var column = realId % 7;
      var row = Math.floor(realId / 7);
      var tempColor;

      if (this.state.colorBoolean == 0) {
        this.state.board[row][column] = this.state.colors[this.state.colorBoolean + 1];
        tempColor = this.state.colors[this.state.colorBoolean + 1];
      }
      if (this.state.colorBoolean == 1) {
        this.state.board[row][column] = this.state.colors[this.state.colorBoolean + 1];
        tempColor = this.state.colors[this.state.colorBoolean + 1];
      }
      if (this.state.colorBoolean == 2) {
        this.state.board[row][column] = this.state.colors[this.state.colorBoolean - 1];
        tempColor = this.state.colors[this.state.colorBoolean - 1];
      }
      globalBoard = this.state.board;
      console.log('current color used', tempColor);
      console.log('current id used', id);
      console.log('current board state', this.state.board);

      this.checkWinner(this.state.board, id, this.state.colors[this.state.colorBoolean]);
    }
  }, {
    key: 'checkRows',
    value: function checkRows(board, id, color) {
      var realId = Number(id);
      var rowId = Math.floor(realId / 7);
      var row = board[rowId];

      for (var i = 0; i < 7; i++) {
        var colorTotal = 0;
        for (var j = 0; j < 4; j++) {
          if (i + j < 7 && i + j >= 0 && row[i + j] !== undefined && row[i + j] == color) {
            colorTotal++;
          }
        }
        if (colorTotal == 4) {
          //       winner(color);
          console.log('rows work');
        }
      }
    }
  }, {
    key: 'checkColumns',
    value: function checkColumns(board, id, color) {
      var realId = Number(id);
      var column = realId % 7;

      for (var i = 0; i < 6; i++) {
        var colorTotal = 0;
        for (var j = 0; j < 4; j++) {
          if (i + j < 6 && i + j >= 0 && board[i + j][column] !== undefined && board[i + j][column] == color) {
            colorTotal++;
          }
        }
        if (colorTotal == 4) {
          //       winner(color);
          console.log('columns work');
        }
      }
    }
  }, {
    key: 'checkMajorDiagonal',
    value: function checkMajorDiagonal(board, id, color) {
      var realId = Number(id);
      var column = realId % 7;
      var row = Math.floor(realId / 7);
      var startingColumn = column - row;

      for (var i = 0; i < 6; i++) {
        var colorTotal = 0;
        for (var j = 0; j < 4; j++) {
          if (startingColumn + j >= 0 && startingColumn + j < 7 && i + j < 7 && board[i + j] !== undefined) {
            if (board[i + j][startingColumn + j] !== undefined && board[i + j][startingColumn + j] == color) {
              colorTotal++;
            }
          }
        }
        if (colorTotal == 4) {
          console.log('won!!!');
          // winner(color);
        }
        startingColumn++;
      }
    }
  }, {
    key: 'checkMinorDiagonal',
    value: function checkMinorDiagonal(board, id, color) {
      var realId = Number(id);
      var column = realId % 7;
      var row = Math.floor(realId / 7);
      var startingColumn = column + row;

      for (var i = 0; i < 6; i++) {
        var colorTotal = 0;
        for (var j = 0; j < 4; j++) {
          if (startingColumn - j >= 0 && startingColumn - j < 7 && i + j < 7 && board[i + j] !== undefined) {
            if (board[i + j][startingColumn - j] !== undefined && board[i + j][startingColumn - j] == color) {
              colorTotal++;
            }
          }
        }
        if (colorTotal == 4) {
          console.log('won');
          // winner(color);
        }
        startingColumn--;
      }
    }
  }, {
    key: 'checkWinner',
    value: function checkWinner(board, id, color) {
      this.checkRows(board, id, color);
      this.checkColumns(board, id, color);
      this.checkMajorDiagonal(board, id, color);
      this.checkMinorDiagonal(board, id, color);
    }
  }, {
    key: 'checkColumns',
    value: function checkColumns(board, id, color) {
      var realId = Number(id);
      var column = realId % 7;

      for (var i = 0; i < 6; i++) {
        var colorTotal = 0;
        for (var j = 0; j < 4; j++) {
          if (i + j < 6 && i + j >= 0 && board[i + j][column] !== undefined && board[i + j][column] == color) {
            colorTotal++;
          }
        }
        if (colorTotal == 4) {
          //       winner(color);
          console.log('columns work');
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        'backgroundColor': this.state.colors[this.state.colorBoolean]
      };
      var rows = [];
      for (var i = 0; i < this.state.rowSize; i++) {
        var cell = [];
        for (var j = 0; j < this.state.columnSize; j++) {
          var cellID = i * 7 + j + 1;
          cell.push(React.createElement(Piece, { style: style, onClick: this.changeCellColor.bind(this), id: cellID }));
        }
        rows.push(React.createElement(
          'tr',
          null,
          cell
        ));
      }

      return React.createElement(
        'table',
        { align: 'center' },
        rows
      );
    }
  }]);

  return Table;
}(React.Component);

var Piece = function Piece(props) {
  return React.createElement('td', { style: props.style, className: props.id, onClick: function onClick() {
      return props.onClick(props.id);
    } });
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRleHRBbGlnbiIsImdsb2JhbEJvYXJkIiwiVGFibGUiLCJzdGF0ZSIsImJvYXJkIiwiYm9hcmQyIiwicm93U2l6ZSIsImNvbHVtblNpemUiLCJjb2xvcnMiLCJjb2xvckJvb2xlYW4iLCJpZCIsInNldFN0YXRlIiwiYWRkQ29vcmRpbmF0ZVRvQm9hcmQiLCJjb25zb2xlIiwibG9nIiwicmVhbElkIiwiTnVtYmVyIiwiY29sdW1uIiwicm93IiwiTWF0aCIsImZsb29yIiwidGVtcENvbG9yIiwiY2hlY2tXaW5uZXIiLCJjb2xvciIsInJvd0lkIiwiaSIsImNvbG9yVG90YWwiLCJqIiwidW5kZWZpbmVkIiwic3RhcnRpbmdDb2x1bW4iLCJjaGVja1Jvd3MiLCJjaGVja0NvbHVtbnMiLCJjaGVja01ham9yRGlhZ29uYWwiLCJjaGVja01pbm9yRGlhZ29uYWwiLCJzdHlsZSIsInJvd3MiLCJjZWxsIiwiY2VsbElEIiwicHVzaCIsImNoYW5nZUNlbGxDb2xvciIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBpZWNlIiwib25DbGljayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxLQUFEO0FBQUEsU0FDUjtBQUFBO0FBQUEsTUFBSyxPQUFPLEVBQUNDLFdBQVUsUUFBWCxFQUFaO0FBQ0Usd0JBQUMsS0FBRDtBQURGLEdBRFE7QUFBQSxDQUFWO0FBS0EsSUFBSUMsV0FBSjs7SUFDTUMsSzs7O0FBQ0osaUJBQVlILEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0ksS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FBRSxFQUFGLEVBQUssRUFBTCxFQUFRLEVBQVIsRUFBVyxFQUFYLEVBQWMsRUFBZCxFQUFpQixFQUFqQixDQURJ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QUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBOUIsRUFBK0QsSUFBSUgsTUFBbkUsR0FBVjtBQUNEO0FBQ0RGLGFBQUtHLElBQUwsQ0FBVTtBQUFBO0FBQUE7QUFBS0Y7QUFBTCxTQUFWO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUEsVUFBTyxPQUFNLFFBQWI7QUFDR0Q7QUFESCxPQURGO0FBS0M7Ozs7RUFoTWVNLE1BQU1DLFM7O0FBbU0xQixJQUFJQyxRQUFRLFNBQVJBLEtBQVEsQ0FBQzVDLEtBQUQ7QUFBQSxTQUNSLDRCQUFJLE9BQU9BLE1BQU1tQyxLQUFqQixFQUF3QixXQUFXbkMsTUFBTVcsRUFBekMsRUFBNkMsU0FBUztBQUFBLGFBQU1YLE1BQU02QyxPQUFOLENBQWM3QyxNQUFNVyxFQUFwQixDQUFOO0FBQUEsS0FBdEQsR0FEUTtBQUFBLENBQVo7O0FBTUFtQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFwcCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cbiAgICA8VGFibGUgLz5cbiAgPC9kaXY+XG4pXG52YXIgZ2xvYmFsQm9hcmQ7XG5jbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBib2FyZDogWyBbXSxbXSxbXSxbXSxbXSxbXSBdLFxuICAgICAgYm9hcmQyOiBbXSxcbiAgICAgIHJvd1NpemU6IDYsXG4gICAgICBjb2x1bW5TaXplOiA3LFxuICAgICAgY29sb3JzOiBbJ3doaXRlJywgJ3JlZCcsICd5ZWxsb3cnXSxcbiAgICAgIGNvbG9yQm9vbGVhbjogMFxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUNlbGxDb2xvcihpZCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiA9PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sb3JCb29sZWFuOiAxXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gPT0gMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbG9yQm9vbGVhbjogMlxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY29sb3JCb29sZWFuID09IDIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb2xvckJvb2xlYW46IDFcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuYWRkQ29vcmRpbmF0ZVRvQm9hcmQoaWQgLSAxKVxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICBcbiAgICB9XG5cbiAgYWRkQ29vcmRpbmF0ZVRvQm9hcmQoaWQpIHtcbiAgICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgICB2YXIgY29sdW1uID0gcmVhbElkICUgNztcbiAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihyZWFsSWQvNyk7XG4gICAgdmFyIHRlbXBDb2xvcjtcblxuICAgIGlmICh0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiA9PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sdW1uXSA9IHRoaXMuc3RhdGUuY29sb3JzW3RoaXMuc3RhdGUuY29sb3JCb29sZWFuICsgMV07XG4gICAgICB0ZW1wQ29sb3IgPSB0aGlzLnN0YXRlLmNvbG9yc1t0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiArIDFdXG5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY29sb3JCb29sZWFuID09IDEpIHtcbiAgICAgIHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2x1bW5dID0gdGhpcy5zdGF0ZS5jb2xvcnNbdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gKyAxXTtcbiAgICAgIHRlbXBDb2xvciA9IHRoaXMuc3RhdGUuY29sb3JzW3RoaXMuc3RhdGUuY29sb3JCb29sZWFuICsgMV07XG5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY29sb3JCb29sZWFuID09IDIpIHtcbiAgICAgIHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2x1bW5dID0gdGhpcy5zdGF0ZS5jb2xvcnNbdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gLSAxXTtcbiAgICAgIHRlbXBDb2xvciA9IHRoaXMuc3RhdGUuY29sb3JzW3RoaXMuc3RhdGUuY29sb3JCb29sZWFuIC0gMV1cbiAgICB9XG4gICAgZ2xvYmFsQm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IGNvbG9yIHVzZWQnLCB0ZW1wQ29sb3IpXG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnQgaWQgdXNlZCcsIGlkKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudCBib2FyZCBzdGF0ZScsIHRoaXMuc3RhdGUuYm9hcmQpO1xuXG4gICAgdGhpcy5jaGVja1dpbm5lcih0aGlzLnN0YXRlLmJvYXJkLCBpZCwgdGhpcy5zdGF0ZS5jb2xvcnNbdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW5dKTtcbiAgfVxuXG4gIGNoZWNrUm93cyhib2FyZCwgaWQsIGNvbG9yKSB7XG4gICAgdmFyIHJlYWxJZCA9IE51bWJlcihpZClcbiAgICB2YXIgcm93SWQgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbiAgICB2YXIgcm93ID0gYm9hcmRbcm93SWRdIFxuICBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgdmFyIGNvbG9yVG90YWwgPSAwXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAoKGkraiA8IDcpICYmIChpK2ogPj0gMCkgJiYgKHJvd1tpICsgal0gIT09IHVuZGVmaW5lZCkgJiYgKHJvd1tpICsgal0gPT0gY29sb3IpKSB7XG4gICAgICAgICAgY29sb3JUb3RhbCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4gIC8vICAgICAgIHdpbm5lcihjb2xvcik7XG4gIGNvbnNvbGUubG9nKCdyb3dzIHdvcmsnKVxuICAgICAgfVxuICAgIH1cbiAgXG4gIH1cbiAgXG4gIGNoZWNrQ29sdW1ucyhib2FyZCwgaWQsIGNvbG9yKSB7XG4gICAgdmFyIHJlYWxJZCA9IE51bWJlcihpZCk7XG4gICAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGlmICgoaStqIDwgNikgJiYgKGkraiA+PSAwKSAmJiAoYm9hcmRbaSArIGpdW2NvbHVtbl0gIT09IHVuZGVmaW5lZCkgJiYgKGJvYXJkW2kgKyBqXVtjb2x1bW5dID09IGNvbG9yKSkge1xuICAgICAgICAgIGNvbG9yVG90YWwrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuICAvLyAgICAgICB3aW5uZXIoY29sb3IpO1xuICBjb25zb2xlLmxvZygnY29sdW1ucyB3b3JrJylcbiAgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBjaGVja01ham9yRGlhZ29uYWwoYm9hcmQsIGlkLCBjb2xvcikge1xuICAgIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpO1xuICAgIHZhciBjb2x1bW4gPSByZWFsSWQgJSA3O1xuICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbiAgICB2YXIgc3RhcnRpbmdDb2x1bW4gPSBjb2x1bW4gLSByb3c7XG4gIFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICB2YXIgY29sb3JUb3RhbCA9IDA7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAoKHN0YXJ0aW5nQ29sdW1uICsgaikgPj0gMCAmJiAoc3RhcnRpbmdDb2x1bW4gKyBqKSA8IDcgJiYgaStqIDwgNyAmJiBib2FyZFtpK2pdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoYm9hcmRbaSArIGpdW3N0YXJ0aW5nQ29sdW1uICsgal0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gKyBqXSA9PSBjb2xvcikge1xuICAgICAgICAgICAgY29sb3JUb3RhbCsrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3b24hISEnKTtcbiAgICAgICAgLy8gd2lubmVyKGNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0aW5nQ29sdW1uKytcbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrTWlub3JEaWFnb25hbChib2FyZCwgaWQsIGNvbG9yKSB7XG4gICAgdmFyIHJlYWxJZCA9IE51bWJlcihpZCk7XG4gICAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gICAgdmFyIHJvdyA9IE1hdGguZmxvb3IocmVhbElkLzcpO1xuICAgIHZhciBzdGFydGluZ0NvbHVtbiA9IGNvbHVtbiArIHJvd1xuICBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgdmFyIGNvbG9yVG90YWwgPSAwO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgaWYgKChzdGFydGluZ0NvbHVtbiAtIGopID49IDAgJiYgKHN0YXJ0aW5nQ29sdW1uIC0gaikgPCA3ICYmIChpICsgaiA8IDcpICYmIGJvYXJkW2kral0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gLSBqXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiAtIGpdID09IGNvbG9yKSB7XG4gICAgICAgICAgICBjb2xvclRvdGFsKytcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb2xvclRvdGFsID09IDQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3b24nKVxuICAgICAgLy8gd2lubmVyKGNvbG9yKTtcbiAgICB9XG4gICAgICBzdGFydGluZ0NvbHVtbi0tXG4gICAgfVxuICB9XG4gIFxuICBjaGVja1dpbm5lcihib2FyZCwgaWQsIGNvbG9yKSB7XG4gICAgdGhpcy5jaGVja1Jvd3MoYm9hcmQsIGlkLCBjb2xvcik7XG4gICAgdGhpcy5jaGVja0NvbHVtbnMoYm9hcmQsIGlkLCBjb2xvcik7XG4gICAgdGhpcy5jaGVja01ham9yRGlhZ29uYWwoYm9hcmQsIGlkLCBjb2xvcik7XG4gICAgdGhpcy5jaGVja01pbm9yRGlhZ29uYWwoYm9hcmQsIGlkLCBjb2xvcik7XG4gIH1cblxuICBjaGVja0NvbHVtbnMoYm9hcmQsIGlkLCBjb2xvcikge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gIFxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgaWYgKChpK2ogPCA2KSAmJiAoaStqID49IDApICYmIChib2FyZFtpICsgal1bY29sdW1uXSAhPT0gdW5kZWZpbmVkKSAmJiAoYm9hcmRbaSArIGpdW2NvbHVtbl0gPT0gY29sb3IpKSB7XG4gICAgICAgIGNvbG9yVG90YWwrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuLy8gICAgICAgd2lubmVyKGNvbG9yKTtcbmNvbnNvbGUubG9nKCdjb2x1bW5zIHdvcmsnKVxuXG4gICAgfVxuICB9XG59XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiB0aGlzLnN0YXRlLmNvbG9yc1t0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbl1cbiAgICB9XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93U2l6ZTsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IFtdO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLmNvbHVtblNpemU7IGorKykge1xuICAgICAgICBsZXQgY2VsbElEID0gKGkgKiA3ICsgaikgKyAxXG4gICAgICAgIGNlbGwucHVzaCg8UGllY2Ugc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0aGlzLmNoYW5nZUNlbGxDb2xvci5iaW5kKHRoaXMpfSBpZD17Y2VsbElEfSAvPilcbiAgICAgIH1cbiAgICAgIHJvd3MucHVzaCg8dHI+e2NlbGx9PC90cj4pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAge3Jvd3N9XG4gICAgICA8L3RhYmxlPlxuICAgICAgKVxuICAgIH1cbn1cblxudmFyIFBpZWNlID0gKHByb3BzKSA9PiAoXG4gICAgPHRkIHN0eWxlPXtwcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXtwcm9wcy5pZH0gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayhwcm9wcy5pZCl9PlxuICAgICAgXG4gICAgPC90ZD5cbilcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxuIl19