import React, {Component} from 'react';
import './App.css';



class App extends Component {
  state = {
    inputText: ''
  };

  inputTextHandler = (event) => {
    this.setState({inputText: event.target.value});
  };



  render() {
    let s = (this.state.inputText)
  return (
    <div className="App">
      <input onChange={(event) => this.inputTextHandler(event)} value={this.state.inputText} type="text"/>
      <p>{this.state.inputText.length}</p>
    </div>
  );
  }
}

export default App;
