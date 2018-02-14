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
    let piecesHolder = [];
    

    return (
    <table align='center'>
      <tr>
        <Piece />
      </tr>
    </table>
    )
  }
}

var Piece = (props) => (
    <td>
      test1
    </td>
)

ReactDOM.render(<App />, document.getElementById("app"));