// import Bootstrap from '../Bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';


// class App extends React.Component {
var App = (props) => (
  <div>
    <Table />
  </div>
)

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [ [],[],[],[],[],[] ],
      board2: [],
      rowSize: 6,
      columnSize: 7
    }
  }

  render() {
    // let rows = [];
    // for (var i = 0; i < this.state.rowSize; i++) {
    //   let cell = [];
    //   for (var j = 0; j < this.state.columnSize; j++) {
    //     let cellID = i * 7 + j
    //     cell.push(<Piece )
    //   }
    // }

    return (
    <table align='center'>
      <tr>
        <Piece id='13'/>
      </tr>
    </table>
    )
  }
}

var Piece = (props) => (
    <td>
      test123
    </td>
)

ReactDOM.render(<App />, document.getElementById("app"));