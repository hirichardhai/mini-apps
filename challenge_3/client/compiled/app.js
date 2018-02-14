"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Bootstrap from '../Bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';


// class App extends React.Component {
var App = function App(props) {
  return React.createElement(
    "div",
    null,
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
      var piecesHolder = [];

      return React.createElement(
        "table",
        { align: "center" },
        React.createElement(
          "tr",
          null,
          React.createElement(Piece, null)
        )
      );
    }
  }]);

  return Table;
}(React.Component);

var Piece = function Piece(props) {
  return React.createElement(
    "td",
    null,
    "test1"
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsIlRhYmxlIiwic3RhdGUiLCJib2FyZCIsImJvYXJkMiIsInJvd1NpemUiLCJjb2x1bW5TaXplIiwicGllY2VzSG9sZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQaWVjZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBO0FBQ0Usd0JBQUMsS0FBRDtBQURGLEdBRFE7QUFBQSxDQUFWOztJQU1NQyxLOzs7QUFDSixpQkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLRSxLQUFMLEdBQWE7QUFDWEMsYUFBTyxDQUFFLEVBQUYsRUFBSyxFQUFMLEVBQVEsRUFBUixFQUFXLEVBQVgsRUFBYyxFQUFkLEVBQWlCLEVBQWpCLENBREk7QUFFWEMsY0FBUSxFQUZHO0FBR1hDLGVBQVMsQ0FIRTtBQUlYQyxrQkFBWTtBQUpELEtBQWI7QUFGaUI7QUFRbEI7Ozs7NkJBRVE7QUFDUCxVQUFJQyxlQUFlLEVBQW5COztBQUdBLGFBQ0E7QUFBQTtBQUFBLFVBQU8sT0FBTSxRQUFiO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsS0FBRDtBQURGO0FBREYsT0FEQTtBQU9EOzs7O0VBdEJpQkMsTUFBTUMsUzs7QUF5QjFCLElBQUlDLFFBQVEsU0FBUkEsS0FBUSxDQUFDVixLQUFEO0FBQUEsU0FDUjtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRFE7QUFBQSxDQUFaOztBQU1BVyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEJvb3RzdHJhcCBmcm9tICcuLi9Cb290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbic7XG5cblxuLy8gY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbnZhciBBcHAgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8VGFibGUgLz5cbiAgPC9kaXY+XG4pXG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBbIFtdLFtdLFtdLFtdLFtdLFtdIF0sXG4gICAgICBib2FyZDI6IFtdLFxuICAgICAgcm93U2l6ZTogNixcbiAgICAgIGNvbHVtblNpemU6IDdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBpZWNlc0hvbGRlciA9IFtdO1xuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICA8dGFibGUgYWxpZ249J2NlbnRlcic+XG4gICAgICA8dHI+XG4gICAgICAgIDxQaWVjZSAvPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuXG52YXIgUGllY2UgPSAocHJvcHMpID0+IChcbiAgICA8dGQ+XG4gICAgICB0ZXN0MVxuICAgIDwvdGQ+XG4pXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il19