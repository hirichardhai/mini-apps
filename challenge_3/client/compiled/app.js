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
    key: "render",
    value: function render() {
      var rows = [];
      for (var i = 0; i < this.state.rowSize; i++) {
        var cell = [];
        for (var j = 0; j < this.state.columnSize; j++) {
          var cellID = i * 7 + j;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRleHRBbGlnbiIsIlRhYmxlIiwic3RhdGUiLCJib2FyZCIsImJvYXJkMiIsInJvd1NpemUiLCJjb2x1bW5TaXplIiwicm93cyIsImkiLCJjZWxsIiwiaiIsImNlbGxJRCIsInB1c2giLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBpZWNlIiwiaWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBLE1BQUssT0FBTyxFQUFDQyxXQUFVLFFBQVgsRUFBWjtBQUNFLHdCQUFDLEtBQUQ7QUFERixHQURRO0FBQUEsQ0FBVjs7SUFNTUMsSzs7O0FBQ0osaUJBQVlGLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FBRSxFQUFGLEVBQUssRUFBTCxFQUFRLEVBQVIsRUFBVyxFQUFYLEVBQWMsRUFBZCxFQUFpQixFQUFqQixDQURJO0FBRVhDLGNBQVEsRUFGRztBQUdYQyxlQUFTLENBSEU7QUFJWEMsa0JBQVk7QUFKRCxLQUFiO0FBRmlCO0FBUWxCOzs7OzZCQUVRO0FBQ1AsVUFBSUMsT0FBTyxFQUFYO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS04sS0FBTCxDQUFXRyxPQUEvQixFQUF3Q0csR0FBeEMsRUFBNkM7QUFDM0MsWUFBSUMsT0FBTyxFQUFYO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1IsS0FBTCxDQUFXSSxVQUEvQixFQUEyQ0ksR0FBM0MsRUFBZ0Q7QUFDOUMsY0FBSUMsU0FBU0gsSUFBSSxDQUFKLEdBQVFFLENBQXJCO0FBQ0FELGVBQUtHLElBQUwsQ0FBVSxvQkFBQyxLQUFELElBQU8sSUFBSUQsTUFBWCxHQUFWO0FBQ0Q7QUFDREosYUFBS0ssSUFBTCxDQUFVO0FBQUE7QUFBQTtBQUFLSDtBQUFMLFNBQVY7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQSxVQUFPLE9BQU0sUUFBYjtBQUNHRjtBQURILE9BREY7QUFLQzs7OztFQTNCZU0sTUFBTUMsUzs7QUE4QjFCLElBQUlDLFFBQVEsU0FBUkEsS0FBUSxDQUFDaEIsS0FBRDtBQUFBLFNBQ1IsNEJBQUksV0FBV0EsTUFBTWlCLEVBQXJCLEdBRFE7QUFBQSxDQUFaOztBQU1BQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFwcCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cbiAgICA8VGFibGUgLz5cbiAgPC9kaXY+XG4pXG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBbIFtdLFtdLFtdLFtdLFtdLFtdIF0sXG4gICAgICBib2FyZDI6IFtdLFxuICAgICAgcm93U2l6ZTogNixcbiAgICAgIGNvbHVtblNpemU6IDdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93U2l6ZTsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IFtdO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLmNvbHVtblNpemU7IGorKykge1xuICAgICAgICBsZXQgY2VsbElEID0gaSAqIDcgKyBqXG4gICAgICAgIGNlbGwucHVzaCg8UGllY2UgaWQ9e2NlbGxJRH0gLz4pXG4gICAgICB9XG4gICAgICByb3dzLnB1c2goPHRyPntjZWxsfTwvdHI+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgYWxpZ249J2NlbnRlcic+XG4gICAgICAgIHtyb3dzfVxuICAgICAgPC90YWJsZT5cbiAgICAgIClcbiAgICB9XG59XG5cbnZhciBQaWVjZSA9IChwcm9wcykgPT4gKFxuICAgIDx0ZCBjbGFzc05hbWU9e3Byb3BzLmlkfT5cbiAgICAgIFxuICAgIDwvdGQ+XG4pXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il19