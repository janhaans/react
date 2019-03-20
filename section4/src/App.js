import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'ghgw', name: "Valentina", age:11},
      {id:'kfhf', name: "Alessia", age:8},
      {id:'gfhs', name:"Filippa", age:4}
    ],
    showpersons: true
  };
  
  toggleNameHandler = () => {
    const s = this.state.showpersons;
    this.setState({showpersons: !s});
  };

  deletePerson = (event, indexPerson) => {
    let persons = [...this.state.persons];
    persons.splice(indexPerson,1);
    this.setState({persons: persons}); 
  };

  render() {
    let person = null;
    let btnClass = '';

    if (this.state.showpersons) {
      person = (
        <div>
          {this.state.persons.map( (person,index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              key={person.id} 
              delete={index => this.deletePerson(index)}
              />
          })}
        </div>
      );
      btnClass = styles.Red;
    };

    return (
      <div className={styles.App}>
        <h1>Hello world</h1>
        <p>This is really working</p>
        <button className={btnClass} onClick={this.toggleNameHandler}>Toggle Name</button>
        {person}
      </div>
    );
  }
}

export default App;
