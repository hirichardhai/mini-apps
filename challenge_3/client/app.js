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

  render() {
    let rows = [];
    for (var i = 0; i < this.state.rowSize; i++) {
      let cell = [];
      for (var j = 0; j < this.state.columnSize; j++) {
        let cellID = i * 7 + j
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