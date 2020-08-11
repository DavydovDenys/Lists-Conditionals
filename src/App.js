import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Armin', age: 28},
      {id: 3, name: 'Tom', age: 28},
    ],
    otherState: 'some other state',
    showPersons: false
  };

  // слушает событие input в компоненте Person
  nameChangedHandler = (event, id) => {

    // находим индекс первого елемента где условие правдивое - (p.id === id)true
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // копируем этот элемент с помощью spread оператора
    const person = {
      ...this.state.persons[personIndex]
    };

    // альтернативный вариант копирования элемента
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // обновляем имя элемента
    person.name = event.target.value;

    // копируем весь массив persons
    const persons = [...this.state.persons];

    // обновляем массив - заменяем элемент на новый с обновленным именем
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  render() {
  return (
    <div className="App">

    </div>
  );
  }
}

export default App;
