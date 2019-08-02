import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';


class App extends Component {
   state = {
    name: "Jakob"
  };
  render () {
    return (
      <div>
        <h3>Welcome {this.state.name}</h3>
        <Button variant="contained" color="primary">Helo</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))