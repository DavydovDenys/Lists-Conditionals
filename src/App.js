import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'


class App extends Component {
  state = {
    inputText: ''
  };

  inputTextHandler = (event) => {
    this.setState({inputText: event.target.value});
  };



  render() {

  return (
    <div className="App">
      <input onChange={(event) => this.inputTextHandler(event)} value={this.state.inputText} type="text"/>
      <p>Text length:  {this.state.inputText.length}</p>
      <ValidationComponent textLength={this.state.inputText.length}/>
    </div>
  );
  }
}

export default App;
