import React, { Component } from 'react';
import './App.css';
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

  render() {
    let person = null;

    if (this.state.showpersons) {
      person = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} key={person.id}/>
          })}
        </div>
      );
    };

    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>This is really working</p>
        <button onClick={this.toggleNameHandler}>Toggle Name</button>
        {person}
      </div>
    );
  }
}

export default App;
