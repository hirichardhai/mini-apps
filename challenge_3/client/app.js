class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true
    }
  }

  render() {
    return (
      <div>Hello Everyone!!!
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"));
