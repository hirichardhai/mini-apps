var App = (props) => (
  <div style={{textAlign:"center"}}>
    <Table />
  </div>
)
var globalBoard;
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [ [],[],[],[],[],[] ],
      board2: [],
      rowSize: 6,
      columnSize: 7,
      colors: ['white', 'red', 'yellow'],
      colorBoolean: 0
    }
  }

  changeCellColor(id) {
    if (this.state.colorBoolean == 0) {
      this.setState({
        colorBoolean: 1
      })
    }
    if (this.state.colorBoolean == 1) {
      this.setState({
        colorBoolean: 2
      })
    }
    if (this.state.colorBoolean == 2) {
      this.setState({
        colorBoolean: 1
      })
    }
    this.addCoordinateToBoard(id - 1)
    console.log('clicked')
    
    }

  addCoordinateToBoard(id) {
    var realId = Number(id);
    var column = realId % 7;
    var row = Math.floor(realId/7);
    var tempColor;

    if (this.state.colorBoolean == 0) {
      this.state.board[row][column] = this.state.colors[this.state.colorBoolean + 1];
      tempColor = this.state.colors[this.state.colorBoolean + 1]

    }
    if (this.state.colorBoolean == 1) {
      this.state.board[row][column] = this.state.colors[this.state.colorBoolean + 1];
      tempColor = this.state.colors[this.state.colorBoolean + 1];

    }
    if (this.state.colorBoolean == 2) {
      this.state.board[row][column] = this.state.colors[this.state.colorBoolean - 1];
      tempColor = this.state.colors[this.state.colorBoolean - 1]
    }
    globalBoard = this.state.board;
    console.log('current color used', tempColor)
    console.log('current id used', id);
    console.log('current board state', this.state.board);

    this.checkWinner(this.state.board, id, this.state.colors[this.state.colorBoolean]);
  }

  checkRows(board, id, color) {
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
  
  checkColumns(board, id, color) {
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
  
  checkMajorDiagonal(board, id, color) {
    var realId = Number(id);
    var column = realId % 7;
    var row = Math.floor(realId/7);
    var startingColumn = column - row;
  
    for (var i = 0; i < 6; i++) {
      var colorTotal = 0;
      for (var j = 0; j < 4; j++) {
        if ((startingColumn + j) >= 0 && (startingColumn + j) < 7 && i+j < 7 && board[i+j] !== undefined) {
          if (board[i + j][startingColumn + j] !== undefined && board[i + j][startingColumn + j] == color) {
            colorTotal++
          }
        }
      }
      if (colorTotal == 4) {
        console.log('won!!!');
        // winner(color);
      }
      startingColumn++
    }
  }
  
  checkMinorDiagonal(board, id, color) {
    var realId = Number(id);
    var column = realId % 7;
    var row = Math.floor(realId/7);
    var startingColumn = column + row
  
    for (var i = 0; i < 6; i++) {
      var colorTotal = 0;
      for (var j = 0; j < 4; j++) {
        if ((startingColumn - j) >= 0 && (startingColumn - j) < 7 && (i + j < 7) && board[i+j] !== undefined) {
          if (board[i + j][startingColumn - j] !== undefined && board[i + j][startingColumn - j] == color) {
            colorTotal++
          }
        }
      }
      if (colorTotal == 4) {
      console.log('won')
      // winner(color);
    }
      startingColumn--
    }
  }
  
  checkWinner(board, id, color) {
    this.checkRows(board, id, color);
    this.checkColumns(board, id, color);
    this.checkMajorDiagonal(board, id, color);
    this.checkMinorDiagonal(board, id, color);
  }

  checkColumns(board, id, color) {
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

  render() {
    var style = {
      'backgroundColor': this.state.colors[this.state.colorBoolean]
    }
    let rows = [];
    for (var i = 0; i < this.state.rowSize; i++) {
      let cell = [];
      for (var j = 0; j < this.state.columnSize; j++) {
        let cellID = (i * 7 + j) + 1
        cell.push(<Piece style={style} onClick={this.changeCellColor.bind(this)} id={cellID} />)
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
    <td style={props.style} className={props.id} onClick={() => props.onClick(props.id)}>
      
    </td>
)

ReactDOM.render(<App />, document.getElementById("app"));

