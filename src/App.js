import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Armin', age: 28},
      {id: 1, name: 'Tom', age: 28},
    ],
    otherState: 'some other state',
    showPersons: false
  };



  render() {
  return (
    <div className="App">

    </div>
  );
  }
}

export default App;
