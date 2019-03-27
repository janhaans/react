import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {key: 'trg', name: 'Valentina', age: 10},
      {key: 'gfh', name: 'Alessia', age: 8},
      {key: 'dsr', name: 'Filippa', age:4}
    ],
    showPersons: false
  };

  deletePerson = (key) => {
    let persons = [...this.state.persons];
    let index = persons.findIndex(person => {
      return person.key === key;
    });
    persons.splice(index,1);
    this.setState({persons: persons});
  };

  changeName = (event, key) => {
    let persons = [...this.state.persons];
    let index = persons.findIndex(person => {
      return person.key === key;
    });
    persons[index].name = event.target.value;
    this.setState({persons});
  };

  changeShowPersons = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons}
          delete={this.deletePerson}
          changename={this.changeName}
        />
      );
    };

    return (
      <div className={styles.App}>
        <Cockpit 
          toggle={this.changeShowPersons}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  };

}

export default App;
