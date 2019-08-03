import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';


class App extends React.Component<{}, {
  name: string
  surname: string
}> {
   state = {
    name: "Jakob",
    surname: "Rolik"
  };
  render () {
    return (
      <div>
        <h3>Welcome {this.state.surname} {this.state.name}</h3>
        <Button variant="contained" color="primary">Helo</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))