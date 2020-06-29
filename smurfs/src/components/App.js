import React from "react";
import axios from 'axios';
import "./App.css";
import SmurfContext from "../contexts/SmurfContext";

import Form from './Form';
import List from './List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then((res => {
        console.log(res)
        const newState = res.data
        this.setState = ({smurfs: newState})
      }))
      .catch((err => {
        console.log('something went wrong', err)
      }))
  }
  render() {
    return (
      <SmurfContext.Provider value={this.state.smurfs}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Context API!</h1>
            <Form />
            <List />
        </div>
      </SmurfContext.Provider>
    );
  }
}

export default App;
