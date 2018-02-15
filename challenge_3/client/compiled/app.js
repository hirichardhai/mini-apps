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
    value: function changeCellColor() {
      this.setState({
        colorBoolean: !this.state.colorBoolean
      });
      console.log('clicked');
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
  return React.createElement('td', { className: props.id, onClick: props.onClick });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRleHRBbGlnbiIsIlRhYmxlIiwic3RhdGUiLCJib2FyZCIsImJvYXJkMiIsInJvd1NpemUiLCJjb2x1bW5TaXplIiwiY29sb3JSZWQiLCJjb2xvclllbGxvdyIsImNvbG9yQm9vbGVhbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwicm93cyIsImkiLCJjZWxsIiwiaiIsImNlbGxJRCIsInB1c2giLCJjaGFuZ2VDZWxsQ29sb3IiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQaWVjZSIsImlkIiwib25DbGljayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrUm93cyIsImNvbG9yIiwicmVhbElkIiwiTnVtYmVyIiwicm93SWQiLCJNYXRoIiwiZmxvb3IiLCJyb3ciLCJjb2xvclRvdGFsIiwidW5kZWZpbmVkIiwiY2hlY2tDb2x1bW5zIiwiY29sdW1uIiwiY2hlY2tNYWpvckRpYWdvbmFsIiwic3RhcnRpbmdDb2x1bW4iLCJ3aW5uZXIiLCJjaGVja01pbm9yRGlhZ29uYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBLE1BQUssT0FBTyxFQUFDQyxXQUFVLFFBQVgsRUFBWjtBQUNFLHdCQUFDLEtBQUQ7QUFERixHQURRO0FBQUEsQ0FBVjs7SUFNTUMsSzs7O0FBQ0osaUJBQVlGLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FBRSxFQUFGLEVBQUssRUFBTCxFQUFRLEVBQVIsRUFBVyxFQUFYLEVBQWMsRUFBZCxFQUFpQixFQUFqQixDQURJO0FBRVhDLGNBQVEsRUFGRztBQUdYQyxlQUFTLENBSEU7QUFJWEMsa0JBQVksQ0FKRDtBQUtY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ZW50IjpbInZhciBBcHAgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgPFRhYmxlIC8+XG4gIDwvZGl2PlxuKVxuXG5jbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBib2FyZDogWyBbXSxbXSxbXSxbXSxbXSxbXSBdLFxuICAgICAgYm9hcmQyOiBbXSxcbiAgICAgIHJvd1NpemU6IDYsXG4gICAgICBjb2x1bW5TaXplOiA3LFxuICAgICAgY29sb3JSZWQ6ICdyZWQnLFxuICAgICAgY29sb3JZZWxsb3c6ICd5ZWxsb3cnLFxuICAgICAgY29sb3JCb29sZWFuOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlQ2VsbENvbG9yKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sb3JCb29sZWFuOiAhdGhpcy5zdGF0ZS5jb2xvckJvb2xlYW5cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICB9XG5cbiAgYWRkQ29sdW1uKCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLnN0YXRlLmNvbG9yQm9vbGVhbiA/IHRoaXMuc3RhdGUuY29sb3JSZWQgOiB0aGlzLnN0YXRlLmNvbG9yWWVsbG93XG4gICAgfVxuICAgIGxldCByb3dzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd1NpemU7IGkrKykge1xuICAgICAgbGV0IGNlbGwgPSBbXTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS5jb2x1bW5TaXplOyBqKyspIHtcbiAgICAgICAgbGV0IGNlbGxJRCA9IChpICogNyArIGopICsgMVxuICAgICAgICBjZWxsLnB1c2goPFBpZWNlIHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5jaGFuZ2VDZWxsQ29sb3IuYmluZCh0aGlzKX0gaWQ9e2NlbGxJRH0gLz4pXG4gICAgICB9XG4gICAgICByb3dzLnB1c2goPHRyPntjZWxsfTwvdHI+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgYWxpZ249J2NlbnRlcic+XG4gICAgICAgIHtyb3dzfVxuICAgICAgPC90YWJsZT5cbiAgICAgIClcbiAgICB9XG59XG5cbnZhciBQaWVjZSA9IChwcm9wcykgPT4gKFxuICAgIDx0ZCBjbGFzc05hbWU9e3Byb3BzLmlkfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cbiAgICAgIFxuICAgIDwvdGQ+XG4pXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5cbnZhciBjaGVja1Jvd3MgPSAoYm9hcmQsIGlkLCBjb2xvcikgPT4ge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKVxuICB2YXIgcm93SWQgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbiAgdmFyIHJvdyA9IGJvYXJkW3Jvd0lkXSBcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICBpZiAoKGkraiA8IDcpICYmIChpK2ogPj0gMCkgJiYgKHJvd1tpICsgal0gIT09IHVuZGVmaW5lZCkgJiYgKHJvd1tpICsgal0gPT0gY29sb3IpKSB7XG4gICAgICAgIGNvbG9yVG90YWwrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuLy8gICAgICAgd2lubmVyKGNvbG9yKTtcbmNvbnNvbGUubG9nKCdyb3dzIHdvcmsnKVxuICAgIH1cbiAgfVxuXG59XG5cbnZhciBjaGVja0NvbHVtbnMgPSAoYm9hcmQsIGlkLCBjb2xvcikgPT4ge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gIFxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHZhciBjb2xvclRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgaWYgKChpK2ogPCA2KSAmJiAoaStqID49IDApICYmIChib2FyZFtpICsgal1bY29sdW1uXSAhPT0gdW5kZWZpbmVkKSAmJiAoYm9hcmRbaSArIGpdW2NvbHVtbl0gPT0gY29sb3IpKSB7XG4gICAgICAgIGNvbG9yVG90YWwrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuLy8gICAgICAgd2lubmVyKGNvbG9yKTtcbmNvbnNvbGUubG9nKCdjb2x1bW5zIHdvcmsnKVxuXG4gICAgfVxuICB9XG59XG5cbnZhciBjaGVja01ham9yRGlhZ29uYWwgPSAoYm9hcmQsIGlkLCBjb2xvcikgPT4ge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gIHZhciByb3cgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbiAgdmFyIHN0YXJ0aW5nQ29sdW1uID0gY29sdW1uIC0gcm93O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgdmFyIGNvbG9yVG90YWwgPSAwO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICBpZiAoKHN0YXJ0aW5nQ29sdW1uICsgaikgPj0gMCAmJiAoc3RhcnRpbmdDb2x1bW4gKyBqKSA8IDcpIHtcbiAgICAgICAgaWYgKGJvYXJkW2kgKyBqXVtzdGFydGluZ0NvbHVtbiArIGpdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbaSArIGpdW3N0YXJ0aW5nQ29sdW1uICsgal0gPT0gY29sb3IpIHtcbiAgICAgICAgICBjb2xvclRvdGFsKytcbiAgICAgICAgfVxuICAgICAgfVxuLy8gICAgICAgd2lubmVyKGNvbG9yKTtcbiAgICB9XG4gICAgaWYgKGNvbG9yVG90YWwgPT0gNCkge1xuICAgICAgY29uc29sZS5sb2coJ3dvbiEhIScpO1xuICAgICAgd2lubmVyKGNvbG9yKTtcbiAgICB9XG4gICAgc3RhcnRpbmdDb2x1bW4rK1xuICB9XG59XG5cbnZhciBjaGVja01pbm9yRGlhZ29uYWwgPSAoYm9hcmQsIGlkLCBjb2xvcikgPT4ge1xuICB2YXIgcmVhbElkID0gTnVtYmVyKGlkKTtcbiAgdmFyIGNvbHVtbiA9IHJlYWxJZCAlIDc7XG4gIHZhciByb3cgPSBNYXRoLmZsb29yKHJlYWxJZC83KTtcbiAgdmFyIHN0YXJ0aW5nQ29sdW1uID0gY29sdW1uICsgcm93XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB2YXIgY29sb3JUb3RhbCA9IDA7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgIGlmICgoc3RhcnRpbmdDb2x1bW4gLSBqKSA+PSAwICYmIChzdGFydGluZ0NvbHVtbiAtIGopIDwgNykge1xuICAgICAgICBpZiAoYm9hcmRbaSArIGpdW3N0YXJ0aW5nQ29sdW1uIC0gal0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFtpICsgal1bc3RhcnRpbmdDb2x1bW4gLSBqXSA9PSBjb2xvcikge1xuICAgICAgICAgIGNvbG9yVG90YWwrK1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb2xvclRvdGFsID09IDQpIHtcbiAgICBjb25zb2xlLmxvZygnd29uJylcbiAgICB3aW5uZXIoY29sb3IpO1xuICB9XG4gICAgc3RhcnRpbmdDb2x1bW4tLVxuICB9XG59XG4iXX0=