import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputText: '',
    letters: []
  };

  inputTextHandler = (event) => {
    this.setState({inputText: event.target.value});
    /*this.state.letters.push(event.target.value);*/
  };

  removeItemHandler = (index) => {
    const text =  this.state.inputText.split('')
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({inputText: updatedText})
  };


  render () {

    let char = this.state.inputText.split('').map((c, index) => {
      return (
        <CharComponent
          char={c}
          key={index}
          delete={() => this.removeItemHandler(index)}/>
      )
    })

    return (
    <div className="App">
      <input onChange={(event) => this.inputTextHandler(event)} value={this.state.inputText} type="text"/>
      <p>Text length:  {this.state.inputText.length}</p>
      <p>{this.state.inputText}</p>
      <ValidationComponent textLength={this.state.inputText.length}/>
      {char}
    </div>
  )}
}

export default App;
