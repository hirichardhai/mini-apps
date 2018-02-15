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
      console.log(id, 'id number here');
    }
  }, {
    key: 'addCoordinateToBoard',
    value: function addCoordinateToBoard(id) {
      var realId = Number(id);
      var column = realId % 7;
      var row = Math.floor(realId / 7);
      console.log('hey', this.state.colorBoolean);
      if (this.state.colorBoolean == 0) {
        this.state.board[row][column] = this.state.colors[this.state.colorBoolean + 1];
      }
      if (this.state.colorBoolean == 1) {
        this.state.board[row][column] = this.state.colors[this.state.colorBoolean + 1];
      }
      if (this.state.colorBoolean == 2) {
        this.state.board[row][column] = this.state.colors[this.state.colorBoolean - 1];
      }
      globalBoard = this.state.board;
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

var checkRows = function checkRows(board, id, color) {
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
};

var checkColumns = function checkColumns(board, id, color) {
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
};

var checkMajorDiagonal = function checkMajorDiagonal(board, id, color) {
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
      winner(color);
    }
    startingColumn++;
  }
};

var checkMinorDiagonal = function checkMinorDiagonal(board, id, color) {
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
      winner(color);
    }
    startingColumn--;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRleHRBbGlnbiIsImdsb2JhbEJvYXJkIiwiVGFibGUiLCJzdGF0ZSIsImJvYXJkIiwiYm9hcmQyIiwicm93U2l6ZSIsImNvbHVtblNpemUiLCJjb2xvcnMiLCJjb2xvckJvb2xlYW4iLCJpZCIsInNldFN0YXRlIiwiYWRkQ29vcmRpbmF0ZVRvQm9hcmQiLCJjb25zb2xlIiwibG9nIiwicmVhbElkIiwiTnVtYmVyIiwiY29sdW1uIiwicm93IiwiTWF0aCIsImZsb29yIiwic3R5bGUiLCJyb3dzIiwiaSIsImNlbGwiLCJqIiwiY2VsbElEIiwicHVzaCIsImNoYW5nZUNlbGxDb2xvciIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBpZWNlIiwib25DbGljayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrUm93cyIsImNvbG9yIiwicm93SWQiLCJjb2xvclRvdGFsIiwidW5kZWZpbmVkIiwiY2hlY2tDb2x1bW5zIiwiY2hlY2tNYWpvckRpYWdvbmFsIiwic3RhcnRpbmdDb2x1bW4iLCJ3aW5uZXIiLCJjaGVja01pbm9yRGlhZ29uYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBLE1BQUssT0FBTyxFQUFDQyxXQUFVLFFBQVgsRUFBWjtBQUNFLHdCQUFDLEtBQUQ7QUFERixHQURRO0FBQUEsQ0FBVjtBQUtBLElBQUlDLFdBQUo7O0lBQ01DLEs7OztBQUNKLGlCQUFZSCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtJLEtBQUwsR0FBYTtBQUNYQyxhQUFPLENBQUUsRUFBRixFQUFLLEVBQUwsRUFBUSxFQUFSLEVBQVcsRUFBWCxFQUFjLEVBQWQsRUFBaUIsRUFBakIsQ0FESTtBQUVYQyxjQUFRLEVBRkc7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RCxZQUFJckIsTUFBTW1CLElBQUlFLENBQVYsRUFBYW9CLGlCQUFpQnBCLENBQTlCLE1BQXFDaUIsU0FBckMsSUFBa0R0QyxNQUFNbUIsSUFBSUUsQ0FBVixFQUFhb0IsaUJBQWlCcEIsQ0FBOUIsS0FBb0NjLEtBQTFGLEVBQWlHO0FBQy9GRTtBQUNEO0FBQ0Y7QUFDRjtBQUNELFFBQUlBLGNBQWMsQ0FBbEIsRUFBcUI7QUFDckI1QixjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBZ0MsYUFBT1AsS0FBUDtBQUNEO0FBQ0NNO0FBQ0Q7QUFDRixDQXJCRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQXBwID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICAgIDxUYWJsZSAvPlxuICA8L2Rpdj5cbilcbnZhciBnbG9iYWxCb2FyZDtcbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBbIFtdLFtdLFtdLFtdLFtdLFtdIF0sXG4gICAgICBib2FyZDI6IFtdLFxuICAgICAgcm93U2l6ZTogNixcbiAgICAgIGNvbHVtblNpemU6IDcsXG4gICAgICBjb2xvcnM6IFsnd2hpdGUnLCAncmVkJywgJ3llbGxvdyddLFxuICAgICAgY29sb3JCb29sZWFuOiAwXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlQ2VsbENvbG9yKGlkKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29sb3JCb29sZWFuID09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb2xvckJvb2xlYW46IDFcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiA9PSAxKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sb3JCb29sZWFuOiAyXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gPT0gMikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbG9yQm9vbGVhbjogMVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5hZGRDb29yZGluYXRlVG9Cb2FyZChpZCAtIDEpXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgIGNvbnNvbGUubG9nKGlkLCAnaWQgbnVtYmVyIGhlcmUnKTtcbiAgICBcbiAgICB9XG5cbiAgYWRkQ29vcmRpbmF0ZVRvQm9hcmQoaWQpIHtcbiAgICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgICB2YXIgY29sdW1uID0gcmVhbElkICUgNztcbiAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihyZWFsSWQvNyk7XG4gICAgY29uc29sZS5sb2coJ2hleScsIHRoaXMuc3RhdGUuY29sb3JCb29sZWFuKVxuICAgIGlmICh0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiA9PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sdW1uXSA9IHRoaXMuc3RhdGUuY29sb3JzW3RoaXMuc3RhdGUuY29sb3JCb29sZWFuICsgMV1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY29sb3JCb29sZWFuID09IDEpIHtcbiAgICAgIHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2x1bW5dID0gdGhpcy5zdGF0ZS5jb2xvcnNbdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gKyAxXVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gPT0gMikge1xuICAgICAgdGhpcy5zdGF0ZS5ib2FyZFtyb3ddW2NvbHVtbl0gPSB0aGlzLnN0YXRlLmNvbG9yc1t0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiAtIDFdXG4gICAgfVxuICAgIGdsb2JhbEJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogdGhpcy5zdGF0ZS5jb2xvcnNbdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW5dXG4gICAgfVxuICAgIGxldCByb3dzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd1NpemU7IGkrKykge1xuICAgICAgbGV0IGNlbGwgPSBbXTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS5jb2x1bW5TaXplOyBqKyspIHtcbiAgICAgICAgbGV0IGNlbGxJRCA9IChpICogNyArIGopICsgMVxuICAgICAgICBjZWxsLnB1c2goPFBpZWNlIHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5jaGFuZ2VDZWxsQ29sb3IuYmluZCh0aGlzKX0gaWQ9e2NlbGxJRH0gLz4pXG4gICAgICB9XG4gICAgICByb3dzLnB1c2goPHRyPntjZWxsfTwvdHI+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgYWxpZ249J2NlbnRlcic+XG4gICAgICAgIHtyb3dzfVxuICAgICAgPC90YWJsZT5cbiAgICAgIClcbiAgICB9XG59XG5cbnZhciBQaWVjZSA9IChwcm9wcykgPT4gKFxuICAgIDx0ZCBzdHlsZT17cHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17cHJvcHMuaWR9IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2socHJvcHMuaWQpfT5cbiAgICAgIFxuICAgIDwvdGQ+XG4pXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5cbnZhciBjaGVja1Jvd3MgPSAoYm9hcmQsIGlkLCBjb2xvcikgPT4ge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKVxuICB2YXIgcm93SWQgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbiAgdmFyIHJvdyA9IGJvYXJkW3Jvd0lkXSBcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICBpZiAoKGkraiA8IDcpICYmIChpK2ogPj0gMCkgJiYgKHJvd1tpICsgal0gIT09IHVuZGVmaW5lZCkgJiYgKHJvd1tpICsgal0gPT0gY29sb3IpKSB7XG4gICAgICAgIGNvbG9yVG90YWwrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuLy8gICAgICAgd2lubmVyKGNvbG9yKTtcbmNvbnNvbGUubG9nKCdyb3dzIHdvcmsnKVxuICAgIH1cbiAgfVxuXG59XG5cbnZhciBjaGVja0NvbHVtbnMgPSAoYm9hcmQsIGlkLCBjb2xvcikgPT4ge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gIFxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgaWYgKChpK2ogPCA2KSAmJiAoaStqID49IDApICYmIChib2FyZFtpICsgal1bY29sdW1uXSAhPT0gdW5kZWZpbmVkKSAmJiAoYm9hcmRbaSArIGpdW2NvbHVtbl0gPT0gY29sb3IpKSB7XG4gICAgICAgIGNvbG9yVG90YWwrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuLy8gICAgICAgd2lubmVyKGNvbG9yKTtcbmNvbnNvbGUubG9nKCdjb2x1bW5zIHdvcmsnKVxuXG4gICAgfVxuICB9XG59XG5cbnZhciBjaGVja01ham9yRGlhZ29uYWwgPSAoYm9hcmQsIGlkLCBjb2xvcikgPT4ge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gIHZhciByb3cgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbiAgdmFyIHN0YXJ0aW5nQ29sdW1uID0gY29sdW1uIC0gcm93O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgdmFyIGNvbG9yVG90YWwgPSAwO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICBpZiAoKHN0YXJ0aW5nQ29sdW1uICsgaikgPj0gMCAmJiAoc3RhcnRpbmdDb2x1bW4gKyBqKSA8IDcpIHtcbiAgICAgICAgaWYgKGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiArIGpdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbaSArIGpdW3N0YXJ0aW5nQ29sdW1uICsgal0gPT0gY29sb3IpIHtcbiAgICAgICAgICBjb2xvclRvdGFsKytcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4gICAgICBjb25zb2xlLmxvZygnd29uISEhJyk7XG4gICAgICB3aW5uZXIoY29sb3IpO1xuICAgIH1cbiAgICBzdGFydGluZ0NvbHVtbisrXG4gIH1cbn1cblxudmFyIGNoZWNrTWlub3JEaWFnb25hbCA9IChib2FyZCwgaWQsIGNvbG9yKSA9PiB7XG4gIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpO1xuICB2YXIgY29sdW1uID0gcmVhbElkICUgNztcbiAgdmFyIHJvdyA9IE1hdGguZmxvb3IocmVhbElkLzcpO1xuICB2YXIgc3RhcnRpbmdDb2x1bW4gPSBjb2x1bW4gKyByb3dcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgaWYgKChzdGFydGluZ0NvbHVtbiAtIGopID49IDAgJiYgKHN0YXJ0aW5nQ29sdW1uIC0gaikgPCA3KSB7XG4gICAgICAgIGlmIChib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gLSBqXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiAtIGpdID09IGNvbG9yKSB7XG4gICAgICAgICAgY29sb3JUb3RhbCsrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuICAgIGNvbnNvbGUubG9nKCd3b24nKVxuICAgIHdpbm5lcihjb2xvcik7XG4gIH1cbiAgICBzdGFydGluZ0NvbHVtbi0tXG4gIH1cbn1cbiJdfQ==