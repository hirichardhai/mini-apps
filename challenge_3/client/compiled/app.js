'use strict';

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
    'div',
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
    key: 'render',
    value: function render() {
      // let rows = [];
      // for (var i = 0; i < this.state.rowSize; i++) {
      //   let cell = [];
      //   for (var j = 0; j < this.state.columnSize; j++) {
      //     let cellID = i * 7 + j
      //     cell.push(<Piece )
      //   }
      // }

      return React.createElement(
        'table',
        { align: 'center' },
        React.createElement(
          'tr',
          null,
          React.createElement(Piece, { id: '13' })
        )
      );
    }
  }]);

  return Table;
}(React.Component);

var Piece = function Piece(props) {
  return React.createElement(
    'td',
    null,
    'test123'
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsIlRhYmxlIiwic3RhdGUiLCJib2FyZCIsImJvYXJkMiIsInJvd1NpemUiLCJjb2x1bW5TaXplIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQaWVjZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBO0FBQ0Usd0JBQUMsS0FBRDtBQURGLEdBRFE7QUFBQSxDQUFWOztJQU1NQyxLOzs7QUFDSixpQkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLRSxLQUFMLEdBQWE7QUFDWEMsYUFBTyxDQUFFLEVBQUYsRUFBSyxFQUFMLEVBQVEsRUFBUixFQUFXLEVBQVgsRUFBYyxFQUFkLEVBQWlCLEVBQWpCLENBREk7QUFFWEMsY0FBUSxFQUZHO0FBR1hDLGVBQVMsQ0FIRTtBQUlYQyxrQkFBWTtBQUpELEtBQWI7QUFGaUI7QUFRbEI7Ozs7NkJBRVE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQ0E7QUFBQTtBQUFBLFVBQU8sT0FBTSxRQUFiO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsS0FBRCxJQUFPLElBQUcsSUFBVjtBQURGO0FBREYsT0FEQTtBQU9EOzs7O0VBNUJpQkMsTUFBTUMsUzs7QUErQjFCLElBQUlDLFFBQVEsU0FBUkEsS0FBUSxDQUFDVCxLQUFEO0FBQUEsU0FDUjtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRFE7QUFBQSxDQUFaOztBQU1BVSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEJvb3RzdHJhcCBmcm9tICcuLi9Cb290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbic7XG5cblxuLy8gY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbnZhciBBcHAgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8VGFibGUgLz5cbiAgPC9kaXY+XG4pXG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBbIFtdLFtdLFtdLFtdLFtdLFtdIF0sXG4gICAgICBib2FyZDI6IFtdLFxuICAgICAgcm93U2l6ZTogNixcbiAgICAgIGNvbHVtblNpemU6IDdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gbGV0IHJvd3MgPSBbXTtcbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93U2l6ZTsgaSsrKSB7XG4gICAgLy8gICBsZXQgY2VsbCA9IFtdO1xuICAgIC8vICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLmNvbHVtblNpemU7IGorKykge1xuICAgIC8vICAgICBsZXQgY2VsbElEID0gaSAqIDcgKyBqXG4gICAgLy8gICAgIGNlbGwucHVzaCg8UGllY2UgKVxuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIHJldHVybiAoXG4gICAgPHRhYmxlIGFsaWduPSdjZW50ZXInPlxuICAgICAgPHRyPlxuICAgICAgICA8UGllY2UgaWQ9JzEzJy8+XG4gICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbnZhciBQaWVjZSA9IChwcm9wcykgPT4gKFxuICAgIDx0ZD5cbiAgICAgIHRlc3QxMjNcbiAgICA8L3RkPlxuKVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyJdfQ==