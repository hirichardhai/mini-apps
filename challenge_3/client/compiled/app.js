"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function App(props) {
  return React.createElement(
    "div",
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
      columnSize: 7

    };
    return _this;
  }

  _createClass(Table, [{
    key: "addColumn",
    value: function addColumn() {}
  }, {
    key: "render",
    value: function render() {
      var rows = [];
      for (var i = 0; i < this.state.rowSize; i++) {
        var cell = [];
        for (var j = 0; j < this.state.columnSize; j++) {
          var cellID = i * 7 + j + 1;
          cell.push(React.createElement(Piece, { id: cellID }));
        }
        rows.push(React.createElement(
          "tr",
          null,
          cell
        ));
      }
      return React.createElement(
        "table",
        { align: "center" },
        rows
      );
    }
  }]);

  return Table;
}(React.Component);

var Piece = function Piece(props) {
  return React.createElement("td", { className: props.id });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRleHRBbGlnbiIsIlRhYmxlIiwic3RhdGUiLCJib2FyZCIsImJvYXJkMiIsInJvd1NpemUiLCJjb2x1bW5TaXplIiwicm93cyIsImkiLCJjZWxsIiwiaiIsImNlbGxJRCIsInB1c2giLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBpZWNlIiwiaWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja1Jvd3MiLCJjb2xvciIsInJlYWxJZCIsIk51bWJlciIsInJvd0lkIiwiTWF0aCIsImZsb29yIiwicm93IiwiY29sb3JUb3RhbCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0NvbHVtbnMiLCJjb2x1bW4iLCJjaGVja01ham9yRGlhZ29uYWwiLCJzdGFydGluZ0NvbHVtbiIsIndpbm5lciIsImNoZWNrTWlub3JEaWFnb25hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxLQUFEO0FBQUEsU0FDUjtBQUFBO0FBQUEsTUFBSyxPQUFPLEVBQUNDLFdBQVUsUUFBWCxFQUFaO0FBQ0Usd0JBQUMsS0FBRDtBQURGLEdBRFE7QUFBQSxDQUFWOztJQU1NQyxLOzs7QUFDSixpQkFBWUYsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLRyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxDQUFFLEVBQUYsRUFBSyxFQUFMLEVBQVEsRUFBUixFQUFXLEVBQVgsRUFBYyxFQUFkLEVBQWlCLEVBQWpCLENBREk7QUFFWEMsY0FBUSxFQUZHO0FBR1hDLGVBQVMsQ0FIRTtBQUlYQyxrQkFBWTs7QUFKRCxLQUFiO0FBRmlCO0FBU2xCOzs7O2dDQUVXLENBRVg7Ozs2QkFFUTtBQUNQLFVBQUlDLE9BQU8sRUFBWDtBQUNBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJ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Q0EsU0FBSyxJQUFJbkIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQixVQUFLMEIsaUJBQWlCMUIsQ0FBbEIsSUFBd0IsQ0FBeEIsSUFBOEIwQixpQkFBaUIxQixDQUFsQixHQUF1QixDQUF4RCxFQUEyRDtBQUN6RCxZQUFJUCxNQUFNSyxJQUFJRSxDQUFWLEVBQWEwQixpQkFBaUIxQixDQUE5QixNQUFxQ29CLFNBQXJDLElBQWtEM0IsTUFBTUssSUFBSUUsQ0FBVixFQUFhMEIsaUJBQWlCMUIsQ0FBOUIsS0FBb0NZLEtBQTFGLEVBQWlHO0FBQy9GTztBQUNEO0FBQ0Y7QUFDRjtBQUNELFFBQUlBLGNBQWMsQ0FBbEIsRUFBcUI7QUFDckJFLGNBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0FLLGFBQU9mLEtBQVA7QUFDRDtBQUNDYztBQUNEO0FBQ0YsQ0FyQkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFwcCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cbiAgICA8VGFibGUgLz5cbiAgPC9kaXY+XG4pXG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBbIFtdLFtdLFtdLFtdLFtdLFtdIF0sXG4gICAgICBib2FyZDI6IFtdLFxuICAgICAgcm93U2l6ZTogNixcbiAgICAgIGNvbHVtblNpemU6IDdcblxuICAgIH1cbiAgfVxuXG4gIGFkZENvbHVtbigpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd1NpemU7IGkrKykge1xuICAgICAgbGV0IGNlbGwgPSBbXTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS5jb2x1bW5TaXplOyBqKyspIHtcbiAgICAgICAgbGV0IGNlbGxJRCA9IChpICogNyArIGopICsgMVxuICAgICAgICBjZWxsLnB1c2goPFBpZWNlIGlkPXtjZWxsSUR9IC8+KVxuICAgICAgfVxuICAgICAgcm93cy5wdXNoKDx0cj57Y2VsbH08L3RyPilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAge3Jvd3N9XG4gICAgICA8L3RhYmxlPlxuICAgICAgKVxuICAgIH1cbn1cblxudmFyIFBpZWNlID0gKHByb3BzKSA9PiAoXG4gICAgPHRkIGNsYXNzTmFtZT17cHJvcHMuaWR9PlxuICAgICAgXG4gICAgPC90ZD5cbilcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxudmFyIGNoZWNrUm93cyA9IChib2FyZCwgaWQsIGNvbG9yKSA9PiB7XG4gIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpXG4gIHZhciByb3dJZCA9IE1hdGguZmxvb3IocmVhbElkLzcpO1xuICB2YXIgcm93ID0gYm9hcmRbcm93SWRdIFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgdmFyIGNvbG9yVG90YWwgPSAwXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgIGlmICgoaStqIDwgNykgJiYgKGkraiA+PSAwKSAmJiAocm93W2kgKyBqXSAhPT0gdW5kZWZpbmVkKSAmJiAocm93W2kgKyBqXSA9PSBjb2xvcikpIHtcbiAgICAgICAgY29sb3JUb3RhbCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4vLyAgICAgICB3aW5uZXIoY29sb3IpO1xuY29uc29sZS5sb2coJ3Jvd3Mgd29yaycpXG4gICAgfVxuICB9XG5cbn1cblxudmFyIGNoZWNrQ29sdW1ucyA9IChib2FyZCwgaWQsIGNvbG9yKSA9PiB7XG4gIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpO1xuICB2YXIgY29sdW1uID0gcmVhbElkICUgNztcbiAgXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgdmFyIGNvbG9yVG90YWwgPSAwO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICBpZiAoKGkraiA8IDYpICYmIChpK2ogPj0gMCkgJiYgKGJvYXJkW2kgKyBqXVtjb2x1bW5dICE9PSB1bmRlZmluZWQpICYmIChib2FyZFtpICsgal1bY29sdW1uXSA9PSBjb2xvcikpIHtcbiAgICAgICAgY29sb3JUb3RhbCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4vLyAgICAgICB3aW5uZXIoY29sb3IpO1xuY29uc29sZS5sb2coJ2NvbHVtbnMgd29yaycpXG5cbiAgICB9XG4gIH1cbn1cblxudmFyIGNoZWNrTWFqb3JEaWFnb25hbCA9IChib2FyZCwgaWQsIGNvbG9yKSA9PiB7XG4gIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpO1xuICB2YXIgY29sdW1uID0gcmVhbElkICUgNztcbiAgdmFyIHJvdyA9IE1hdGguZmxvb3IocmVhbElkLzcpO1xuICB2YXIgc3RhcnRpbmdDb2x1bW4gPSBjb2x1bW4gLSByb3c7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB2YXIgY29sb3JUb3RhbCA9IDA7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgIGlmICgoc3RhcnRpbmdDb2x1bW4gKyBqKSA+PSAwICYmIChzdGFydGluZ0NvbHVtbiArIGopIDwgNykge1xuICAgICAgICBpZiAoYm9hcmRbaSArIGpdW3N0YXJ0aW5nQ29sdW1uICsgal0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gKyBqXSA9PSBjb2xvcikge1xuICAgICAgICAgIGNvbG9yVG90YWwrK1xuICAgICAgICB9XG4gICAgICB9XG4vLyAgICAgICB3aW5uZXIoY29sb3IpO1xuICAgIH1cbiAgICBpZiAoY29sb3JUb3RhbCA9PSA0KSB7XG4gICAgICBjb25zb2xlLmxvZygnd29uISEhJyk7XG4gICAgICB3aW5uZXIoY29sb3IpO1xuICAgIH1cbiAgICBzdGFydGluZ0NvbHVtbisrXG4gIH1cbn1cblxudmFyIGNoZWNrTWlub3JEaWFnb25hbCA9IChib2FyZCwgaWQsIGNvbG9yKSA9PiB7XG4gIHZhciByZWFsSWQgPSBOdW1iZXIoaWQpO1xuICB2YXIgY29sdW1uID0gcmVhbElkICUgNztcbiAgdmFyIHJvdyA9IE1hdGguZmxvb3IocmVhbElkLzcpO1xuICB2YXIgc3RhcnRpbmdDb2x1bW4gPSBjb2x1bW4gKyByb3dcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgaWYgKChzdGFydGluZ0NvbHVtbiAtIGopID49IDAgJiYgKHN0YXJ0aW5nQ29sdW1uIC0gaikgPCA3KSB7XG4gICAgICAgIGlmIChib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gLSBqXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiAtIGpdID09IGNvbG9yKSB7XG4gICAgICAgICAgY29sb3JUb3RhbCsrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuICAgIGNvbnNvbGUubG9nKCd3b24nKVxuICAgIHdpbm5lcihjb2xvcik7XG4gIH1cbiAgICBzdGFydGluZ0NvbHVtbi0tXG4gIH1cbn1cbiJdfQ==