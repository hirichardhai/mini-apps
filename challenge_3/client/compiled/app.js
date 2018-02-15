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
      colorRed: 'red',
      colorYellow: 'yellow',
      colorBoolean: true
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'changeCellColor',
    value: function changeCellColor(id) {
      this.setState({
        colorBoolean: !this.state.colorBoolean
      });
      console.log('clicked');
      console.log(id, 'id number here');
    }
  }, {
    key: 'addColumn',
    value: function addColumn() {}
  }, {
    key: 'render',
    value: function render() {
      var style = {
        'background-color': this.state.colorBoolean ? this.state.colorRed : this.state.colorYellow
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
      //       winner(color);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRleHRBbGlnbiIsIlRhYmxlIiwic3RhdGUiLCJib2FyZCIsImJvYXJkMiIsInJvd1NpemUiLCJjb2x1bW5TaXplIiwiY29sb3JSZWQiLCJjb2xvclllbGxvdyIsImNvbG9yQm9vbGVhbiIsImlkIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJyb3dzIiwiaSIsImNlbGwiLCJqIiwiY2VsbElEIiwicHVzaCIsImNoYW5nZUNlbGxDb2xvciIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBpZWNlIiwib25DbGljayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrUm93cyIsImNvbG9yIiwicmVhbElkIiwiTnVtYmVyIiwicm93SWQiLCJNYXRoIiwiZmxvb3IiLCJyb3ciLCJjb2xvclRvdGFsIiwidW5kZWZpbmVkIiwiY2hlY2tDb2x1bW5zIiwiY29sdW1uIiwiY2hlY2tNYWpvckRpYWdvbmFsIiwic3RhcnRpbmdDb2x1bW4iLCJ3aW5uZXIiLCJjaGVja01pbm9yRGlhZ29uYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBLE1BQUssT0FBTyxFQUFDQyxXQUFVLFFBQVgsRUFBWjtBQUNFLHdCQUFDLEtBQUQ7QUFERixHQURRO0FBQUEsQ0FBVjs7SUFNTUMsSzs7O0FBQ0osaUJBQVlGLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FBRSxFQUFGLEVBQUssRUFBTCxFQUFRLEVBQVIsRUFBVyxFQUFYLEVBQWMsRUFBZCxFQUFpQixFQUFqQixDQURJO0FBRVhDLGNBQVEsRUFGRztBQUdYQyxlQUFTLENBSEU7QUFJWEMsa0JBQVksQ0FKRDtBQUtY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LGNBQWMsQ0FBbEIsRUFBcUI7QUFDckIzQixjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBZ0MsYUFBT2IsS0FBUDtBQUNEO0FBQ0NZO0FBQ0Q7QUFDRixDQXJCRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQXBwID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICAgIDxUYWJsZSAvPlxuICA8L2Rpdj5cbilcblxuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9hcmQ6IFsgW10sW10sW10sW10sW10sW10gXSxcbiAgICAgIGJvYXJkMjogW10sXG4gICAgICByb3dTaXplOiA2LFxuICAgICAgY29sdW1uU2l6ZTogNyxcbiAgICAgIGNvbG9yUmVkOiAncmVkJyxcbiAgICAgIGNvbG9yWWVsbG93OiAneWVsbG93JyxcbiAgICAgIGNvbG9yQm9vbGVhbjogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUNlbGxDb2xvcihpZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sb3JCb29sZWFuOiAhdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW5cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICBjb25zb2xlLmxvZyhpZCwgJ2lkIG51bWJlciBoZXJlJyk7XG4gICAgfVxuXG4gIGFkZENvbHVtbigpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW4gPyB0aGlzLnN0YXRlLmNvbG9yUmVkIDogdGhpcy5zdGF0ZS5jb2xvclllbGxvd1xuICAgIH1cbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dTaXplOyBpKyspIHtcbiAgICAgIGxldCBjZWxsID0gW107XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUuY29sdW1uU2l6ZTsgaisrKSB7XG4gICAgICAgIGxldCBjZWxsSUQgPSAoaSAqIDcgKyBqKSArIDFcbiAgICAgICAgY2VsbC5wdXNoKDxQaWVjZSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlQ2VsbENvbG9yLmJpbmQodGhpcyl9IGlkPXtjZWxsSUR9IC8+KVxuICAgICAgfVxuICAgICAgcm93cy5wdXNoKDx0cj57Y2VsbH08L3RyPilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGFsaWduPSdjZW50ZXInPlxuICAgICAgICB7cm93c31cbiAgICAgIDwvdGFibGU+XG4gICAgICApXG4gICAgfVxufVxuXG52YXIgUGllY2UgPSAocHJvcHMpID0+IChcbiAgICA8dGQgc3R5bGU9e3Byb3BzLnN0eWxlfSBjbGFzc05hbWU9e3Byb3BzLmlkfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHByb3BzLmlkKX0+XG4gICAgICBcbiAgICA8L3RkPlxuKVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuXG52YXIgY2hlY2tSb3dzID0gKGJvYXJkLCBpZCwgY29sb3IpID0+IHtcbiAgdmFyIHJlYWxJZCA9IE51bWJlcihpZClcbiAgdmFyIHJvd0lkID0gTWF0aC5mbG9vcihyZWFsSWQvNyk7XG4gIHZhciByb3cgPSBib2FyZFtyb3dJZF0gXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICB2YXIgY29sb3JUb3RhbCA9IDBcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgaWYgKChpK2ogPCA3KSAmJiAoaStqID49IDApICYmIChyb3dbaSArIGpdICE9PSB1bmRlZmluZWQpICYmIChyb3dbaSArIGpdID09IGNvbG9yKSkge1xuICAgICAgICBjb2xvclRvdGFsKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb2xvclRvdGFsID09IDQpIHtcbi8vICAgICAgIHdpbm5lcihjb2xvcik7XG5jb25zb2xlLmxvZygncm93cyB3b3JrJylcbiAgICB9XG4gIH1cblxufVxuXG52YXIgY2hlY2tDb2x1bW5zID0gKGJvYXJkLCBpZCwgY29sb3IpID0+IHtcbiAgdmFyIHJlYWxJZCA9IE51bWJlcihpZCk7XG4gIHZhciBjb2x1bW4gPSByZWFsSWQgJSA3O1xuICBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB2YXIgY29sb3JUb3RhbCA9IDA7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgIGlmICgoaStqIDwgNikgJiYgKGkraiA+PSAwKSAmJiAoYm9hcmRbaSArIGpdW2NvbHVtbl0gIT09IHVuZGVmaW5lZCkgJiYgKGJvYXJkW2kgKyBqXVtjb2x1bW5dID09IGNvbG9yKSkge1xuICAgICAgICBjb2xvclRvdGFsKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb2xvclRvdGFsID09IDQpIHtcbi8vICAgICAgIHdpbm5lcihjb2xvcik7XG5jb25zb2xlLmxvZygnY29sdW1ucyB3b3JrJylcblxuICAgIH1cbiAgfVxufVxuXG52YXIgY2hlY2tNYWpvckRpYWdvbmFsID0gKGJvYXJkLCBpZCwgY29sb3IpID0+IHtcbiAgdmFyIHJlYWxJZCA9IE51bWJlcihpZCk7XG4gIHZhciBjb2x1bW4gPSByZWFsSWQgJSA3O1xuICB2YXIgcm93ID0gTWF0aC5mbG9vcihyZWFsSWQvNyk7XG4gIHZhciBzdGFydGluZ0NvbHVtbiA9IGNvbHVtbiAtIHJvdztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgaWYgKChzdGFydGluZ0NvbHVtbiArIGopID49IDAgJiYgKHN0YXJ0aW5nQ29sdW1uICsgaikgPCA3KSB7XG4gICAgICAgIGlmIChib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gKyBqXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiArIGpdID09IGNvbG9yKSB7XG4gICAgICAgICAgY29sb3JUb3RhbCsrXG4gICAgICAgIH1cbiAgICAgIH1cbi8vICAgICAgIHdpbm5lcihjb2xvcik7XG4gICAgfVxuICAgIGlmIChjb2xvclRvdGFsID09IDQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3b24hISEnKTtcbiAgICAgIHdpbm5lcihjb2xvcik7XG4gICAgfVxuICAgIHN0YXJ0aW5nQ29sdW1uKytcbiAgfVxufVxuXG52YXIgY2hlY2tNaW5vckRpYWdvbmFsID0gKGJvYXJkLCBpZCwgY29sb3IpID0+IHtcbiAgdmFyIHJlYWxJZCA9IE51bWJlcihpZCk7XG4gIHZhciBjb2x1bW4gPSByZWFsSWQgJSA3O1xuICB2YXIgcm93ID0gTWF0aC5mbG9vcihyZWFsSWQvNyk7XG4gIHZhciBzdGFydGluZ0NvbHVtbiA9IGNvbHVtbiArIHJvd1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgdmFyIGNvbG9yVG90YWwgPSAwO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICBpZiAoKHN0YXJ0aW5nQ29sdW1uIC0gaikgPj0gMCAmJiAoc3RhcnRpbmdDb2x1bW4gLSBqKSA8IDcpIHtcbiAgICAgICAgaWYgKGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiAtIGpdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbaSArIGpdW3N0YXJ0aW5nQ29sdW1uIC0gal0gPT0gY29sb3IpIHtcbiAgICAgICAgICBjb2xvclRvdGFsKytcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4gICAgY29uc29sZS5sb2coJ3dvbicpXG4gICAgd2lubmVyKGNvbG9yKTtcbiAgfVxuICAgIHN0YXJ0aW5nQ29sdW1uLS1cbiAgfVxufVxuIl19