var App = (props) => (
  <div style={{textAlign:"center"}}>
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

  addColumn() {

  }

  render() {
    let rows = [];
    for (var i = 0; i < this.state.rowSize; i++) {
      let cell = [];
      for (var j = 0; j < this.state.columnSize; j++) {
        let cellID = (i * 7 + j) + 1
        cell.push(<Piece id={cellID} />)
      }
      rows.push(<tr>{cell}</tr>)
    }
    return (
      <table align='center'>
        {rows}
      </table>
      )
    }
}

var Piece = (props) => (
    <td className={props.id}>
      
    </td>
)

ReactDOM.render(<App />, document.getElementById("app"));

var checkRows = (board, id, color) => {
  var realId = Number(id)
  var rowId = Math.floor(realId/7);
  var row = board[rowId] 

  for (var i = 0; i < 7; i++) {
    var colorTotal = 0
    for (var j = 0; j < 4; j++) {
      if ((i+j < 7) && (i+j >= 0) && (row[i + j] !== undefined) && (row[i + j] == color)) {
        colorTotal++;
      }
    }
    if (colorTotal == 4) {
//       winner(color);
console.log('rows work')
    }
  }

}

var checkColumns = (board, id, color) => {
  var realId = Number(id);
  var column = realId % 7;
  
  for (var i = 0; i < 6; i++) {
    var colorTotal = 0;
    for (var j = 0; j < 4; j++) {
      if ((i+j < 6) && (i+j >= 0) && (board[i + j][column] !== undefined) && (board[i + j][column] == color)) {
        colorTotal++;
      }
    }
    if (colorTotal == 4) {
//       winner(color);
console.log('columns work')

    }
  }
}

var checkMajorDiagonal = (board, id, color) => {
  var realId = Number(id);
  var column = realId % 7;
  var row = Math.floor(realId/7);
  var startingColumn = column - row;

  for (var i = 0; i < 6; i++) {
    var colorTotal = 0;
    for (var j = 0; j < 4; j++) {
      if ((startingColumn + j) >= 0 && (startingColumn + j) < 7) {
        if (board[i + j][startingColumn + j] !== undefined && board[i + j][startingColumn + j] == color) {
          colorTotal++
        }
      }
//       winner(color);
    }
    if (colorTotal == 4) {
      console.log('won!!!');
      winner(color);
    }
    startingColumn++
  }
}

var checkMinorDiagonal = (board, id, color) => {
  var realId = Number(id);
  var column = realId % 7;
  var row = Math.floor(realId/7);
  var startingColumn = column + row

  for (var i = 0; i < 6; i++) {
    var colorTotal = 0;
    for (var j = 0; j < 4; j++) {
      if ((startingColumn - j) >= 0 && (startingColumn - j) < 7) {
        if (board[i + j][startingColumn - j] !== undefined && board[i + j][startingColumn - j] == color) {
          colorTotal++
        }
      }
    }
    if (colorTotal == 4) {
    console.log('won')
    winner(color);
  }
    startingColumn--
  }
}
