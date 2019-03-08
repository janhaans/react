import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Valentina", age:11},
      {name: "Alessia", age:8},
      {name:"Filippa", age:4}
    ]
  };
  
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age:11},
        {name: "Alessia", age:8},
        {name:"Filippa", age:4}
      ]
    });
  };

  nameChangedHandler = (event) =>  {
    this.setState({
      persons: [
        {name: "Valentina", age:11},
        {name: event.target.value, age:8},
        {name:"Filippa", age:4}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this,'Vaal')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
          Sweet
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Tina')}
          change={this.nameChangedHandler}>
          Active
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
          Smart
        </Person>
      </div>
    );
  }
}

export default App;
