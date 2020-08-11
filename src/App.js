import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Armin', age: 25},
      {id: 3, name: 'Tom', age: 22},
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

    // обновляем state
    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id) }>This is children props</Person>
            )
          })}
        </div>
      );
    }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
  }
}

export default App;
