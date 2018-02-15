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
          if (startingColumn + j >= 0 && startingColumn + j < 7) {
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
          if (startingColumn - j >= 0 && startingColumn - j < 7) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRleHRBbGlnbiIsImdsb2JhbEJvYXJkIiwiVGFibGUiLCJzdGF0ZSIsImJvYXJkIiwiYm9hcmQyIiwicm93U2l6ZSIsImNvbHVtblNpemUiLCJjb2xvcnMiLCJjb2xvckJvb2xlYW4iLCJpZCIsInNldFN0YXRlIiwiYWRkQ29vcmRpbmF0ZVRvQm9hcmQiLCJjb25zb2xlIiwibG9nIiwicmVhbElkIiwiTnVtYmVyIiwiY29sdW1uIiwicm93IiwiTWF0aCIsImZsb29yIiwidGVtcENvbG9yIiwiY2hlY2tXaW5uZXIiLCJjb2xvciIsInJvd0lkIiwiaSIsImNvbG9yVG90YWwiLCJqIiwidW5kZWZpbmVkIiwic3RhcnRpbmdDb2x1bW4iLCJjaGVja1Jvd3MiLCJjaGVja0NvbHVtbnMiLCJjaGVja01ham9yRGlhZ29uYWwiLCJjaGVja01pbm9yRGlhZ29uYWwiLCJzdHlsZSIsInJvd3MiLCJjZWxsIiwiY2VsbElEIiwicHVzaCIsImNoYW5nZUNlbGxDb2xvciIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBpZWNlIiwib25DbGljayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxLQUFEO0FBQUEsU0FDUjtBQUFBO0FBQUEsTUFBSyxPQUFPLEVBQUNDLFdBQVUsUUFBWCxFQUFaO0FBQ0Usd0JBQUMsS0FBRDtBQURGLEdBRFE7QUFBQSxDQUFWO0FBS0EsSUFBSUMsV0FBSjs7SUFDTUMsSzs7O0FBQ0osaUJBQVlILEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0ksS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FBRSxFQUFGLEVBQUssRUFBTCxFQUFRLEVBQVIsRUFBVyxFQUFYLEVBQWMsRUFBZCxFQUFpQixFQUFqQixDQURJ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QU8sT0FBTSxRQUFiO0FBQ0dEO0FBREgsT0FERjtBQUtDOzs7O0VBaE1lTSxNQUFNQyxTOztBQW1NMUIsSUFBSUMsUUFBUSxTQUFSQSxLQUFRLENBQUM1QyxLQUFEO0FBQUEsU0FDUiw0QkFBSSxPQUFPQSxNQUFNbUMsS0FBakIsRUFBd0IsV0FBV25DLE1BQU1XLEVBQXpDLEVBQTZDLFNBQVM7QUFBQSxhQUFNWCxNQUFNNkMsT0FBTixDQUFjN0MsTUFBTVcsRUFBcEIsQ0FBTjtBQUFBLEtBQXRELEdBRFE7QUFBQSxDQUFaOztBQU1BbUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBcHAgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgPFRhYmxlIC8+XG4gIDwvZGl2PlxuKVxudmFyIGdsb2JhbEJvYXJkO1xuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9hcmQ6IFsgW10sW10sW10sW10sW10sW10gXSxcbiAgICAgIGJvYXJkMjogW10sXG4gICAgICByb3dTaXplOiA2LFxuICAgICAgY29sdW1uU2l6ZTogNyxcbiAgICAgIGNvbG9yczogWyd3aGl0ZScsICdyZWQnLCAneWVsbG93J10sXG4gICAgICBjb2xvckJvb2xlYW46IDBcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VDZWxsQ29sb3IoaWQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gPT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbG9yQm9vbGVhbjogMVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY29sb3JCb29sZWFuID09IDEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb2xvckJvb2xlYW46IDJcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiA9PSAyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sb3JCb29sZWFuOiAxXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmFkZENvb3JkaW5hdGVUb0JvYXJkKGlkIC0gMSlcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgXG4gICAgfVxuXG4gIGFkZENvb3JkaW5hdGVUb0JvYXJkKGlkKSB7XG4gICAgdmFyIHJlYWxJZCA9IE51bWJlcihpZCk7XG4gICAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gICAgdmFyIHJvdyA9IE1hdGguZmxvb3IocmVhbElkLzcpO1xuICAgIHZhciB0ZW1wQ29sb3I7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gPT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5ib2FyZFtyb3ddW2NvbHVtbl0gPSB0aGlzLnN0YXRlLmNvbG9yc1t0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiArIDFdO1xuICAgICAgdGVtcENvbG9yID0gdGhpcy5zdGF0ZS5jb2xvcnNbdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gKyAxXVxuXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiA9PSAxKSB7XG4gICAgICB0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sdW1uXSA9IHRoaXMuc3RhdGUuY29sb3JzW3RoaXMuc3RhdGUuY29sb3JCb29sZWFuICsgMV07XG4gICAgICB0ZW1wQ29sb3IgPSB0aGlzLnN0YXRlLmNvbG9yc1t0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiArIDFdO1xuXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiA9PSAyKSB7XG4gICAgICB0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sdW1uXSA9IHRoaXMuc3RhdGUuY29sb3JzW3RoaXMuc3RhdGUuY29sb3JCb29sZWFuIC0gMV07XG4gICAgICB0ZW1wQ29sb3IgPSB0aGlzLnN0YXRlLmNvbG9yc1t0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiAtIDFdXG4gICAgfVxuICAgIGdsb2JhbEJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudCBjb2xvciB1c2VkJywgdGVtcENvbG9yKVxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IGlkIHVzZWQnLCBpZCk7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnQgYm9hcmQgc3RhdGUnLCB0aGlzLnN0YXRlLmJvYXJkKTtcblxuICAgIHRoaXMuY2hlY2tXaW5uZXIodGhpcy5zdGF0ZS5ib2FyZCwgaWQsIHRoaXMuc3RhdGUuY29sb3JzW3RoaXMuc3RhdGUuY29sb3JCb29sZWFuXSk7XG4gIH1cblxuICBjaGVja1Jvd3MoYm9hcmQsIGlkLCBjb2xvcikge1xuICAgIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpXG4gICAgdmFyIHJvd0lkID0gTWF0aC5mbG9vcihyZWFsSWQvNyk7XG4gICAgdmFyIHJvdyA9IGJvYXJkW3Jvd0lkXSBcbiAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIHZhciBjb2xvclRvdGFsID0gMFxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgaWYgKChpK2ogPCA3KSAmJiAoaStqID49IDApICYmIChyb3dbaSArIGpdICE9PSB1bmRlZmluZWQpICYmIChyb3dbaSArIGpdID09IGNvbG9yKSkge1xuICAgICAgICAgIGNvbG9yVG90YWwrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuICAvLyAgICAgICB3aW5uZXIoY29sb3IpO1xuICBjb25zb2xlLmxvZygncm93cyB3b3JrJylcbiAgICAgIH1cbiAgICB9XG4gIFxuICB9XG4gIFxuICBjaGVja0NvbHVtbnMoYm9hcmQsIGlkLCBjb2xvcikge1xuICAgIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpO1xuICAgIHZhciBjb2x1bW4gPSByZWFsSWQgJSA3O1xuICAgIFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICB2YXIgY29sb3JUb3RhbCA9IDA7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAoKGkraiA8IDYpICYmIChpK2ogPj0gMCkgJiYgKGJvYXJkW2kgKyBqXVtjb2x1bW5dICE9PSB1bmRlZmluZWQpICYmIChib2FyZFtpICsgal1bY29sdW1uXSA9PSBjb2xvcikpIHtcbiAgICAgICAgICBjb2xvclRvdGFsKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb2xvclRvdGFsID09IDQpIHtcbiAgLy8gICAgICAgd2lubmVyKGNvbG9yKTtcbiAgY29uc29sZS5sb2coJ2NvbHVtbnMgd29yaycpXG4gIFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY2hlY2tNYWpvckRpYWdvbmFsKGJvYXJkLCBpZCwgY29sb3IpIHtcbiAgICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgICB2YXIgY29sdW1uID0gcmVhbElkICUgNztcbiAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihyZWFsSWQvNyk7XG4gICAgdmFyIHN0YXJ0aW5nQ29sdW1uID0gY29sdW1uIC0gcm93O1xuICBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgdmFyIGNvbG9yVG90YWwgPSAwO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgaWYgKChzdGFydGluZ0NvbHVtbiArIGopID49IDAgJiYgKHN0YXJ0aW5nQ29sdW1uICsgaikgPCA3KSB7XG4gICAgICAgICAgaWYgKGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiArIGpdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbaSArIGpdW3N0YXJ0aW5nQ29sdW1uICsgal0gPT0gY29sb3IpIHtcbiAgICAgICAgICAgIGNvbG9yVG90YWwrK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZygnd29uISEhJyk7XG4gICAgICAgIC8vIHdpbm5lcihjb2xvcik7XG4gICAgICB9XG4gICAgICBzdGFydGluZ0NvbHVtbisrXG4gICAgfVxuICB9XG4gIFxuICBjaGVja01pbm9yRGlhZ29uYWwoYm9hcmQsIGlkLCBjb2xvcikge1xuICAgIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpO1xuICAgIHZhciBjb2x1bW4gPSByZWFsSWQgJSA3O1xuICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbiAgICB2YXIgc3RhcnRpbmdDb2x1bW4gPSBjb2x1bW4gKyByb3dcbiAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGlmICgoc3RhcnRpbmdDb2x1bW4gLSBqKSA+PSAwICYmIChzdGFydGluZ0NvbHVtbiAtIGopIDwgNykge1xuICAgICAgICAgIGlmIChib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gLSBqXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiAtIGpdID09IGNvbG9yKSB7XG4gICAgICAgICAgICBjb2xvclRvdGFsKytcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb2xvclRvdGFsID09IDQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3b24nKVxuICAgICAgLy8gd2lubmVyKGNvbG9yKTtcbiAgICB9XG4gICAgICBzdGFydGluZ0NvbHVtbi0tXG4gICAgfVxuICB9XG4gIFxuICBjaGVja1dpbm5lcihib2FyZCwgaWQsIGNvbG9yKSB7XG4gICAgdGhpcy5jaGVja1Jvd3MoYm9hcmQsIGlkLCBjb2xvcik7XG4gICAgdGhpcy5jaGVja0NvbHVtbnMoYm9hcmQsIGlkLCBjb2xvcik7XG4gICAgdGhpcy5jaGVja01ham9yRGlhZ29uYWwoYm9hcmQsIGlkLCBjb2xvcik7XG4gICAgdGhpcy5jaGVja01pbm9yRGlhZ29uYWwoYm9hcmQsIGlkLCBjb2xvcik7XG4gIH1cblxuICBjaGVja0NvbHVtbnMoYm9hcmQsIGlkLCBjb2xvcikge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gIFxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgaWYgKChpK2ogPCA2KSAmJiAoaStqID49IDApICYmIChib2FyZFtpICsgal1bY29sdW1uXSAhPT0gdW5kZWZpbmVkKSAmJiAoYm9hcmRbaSArIGpdW2NvbHVtbl0gPT0gY29sb3IpKSB7XG4gICAgICAgIGNvbG9yVG90YWwrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuLy8gICAgICAgd2lubmVyKGNvbG9yKTtcbmNvbnNvbGUubG9nKCdjb2x1bW5zIHdvcmsnKVxuXG4gICAgfVxuICB9XG59XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiB0aGlzLnN0YXRlLmNvbG9yc1t0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbl1cbiAgICB9XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93U2l6ZTsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IFtdO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLmNvbHVtblNpemU7IGorKykge1xuICAgICAgICBsZXQgY2VsbElEID0gKGkgKiA3ICsgaikgKyAxXG4gICAgICAgIGNlbGwucHVzaCg8UGllY2Ugc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0aGlzLmNoYW5nZUNlbGxDb2xvci5iaW5kKHRoaXMpfSBpZD17Y2VsbElEfSAvPilcbiAgICAgIH1cbiAgICAgIHJvd3MucHVzaCg8dHI+e2NlbGx9PC90cj4pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAge3Jvd3N9XG4gICAgICA8L3RhYmxlPlxuICAgICAgKVxuICAgIH1cbn1cblxudmFyIFBpZWNlID0gKHByb3BzKSA9PiAoXG4gICAgPHRkIHN0eWxlPXtwcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXtwcm9wcy5pZH0gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayhwcm9wcy5pZCl9PlxuICAgICAgXG4gICAgPC90ZD5cbilcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxuIl19