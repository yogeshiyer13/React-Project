import React, { Component } from 'react';
import './App.css';
//import styled from 'styled-components';
//import Radium,{ StyleRoot } from 'radium';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id:'abcd', name:'Max', age: 28},
      {id:'efgh', name:'Manu', age: 29},
      {id:'ijkl', name:'Stephanie', age:26}

    ],
    otherState: 'some other value',
    showPersons: false
  }

nameChangedHandler = (event, id) => {
  const personIndex = this.state.person.findIndex(p => {
    return p.id === id;
  });

const person = {
  ...this.state.persons[personIndex]
};

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

  this.setState({persons: persons});
}


deletePersonHandler = (personIndex) => {        
  //const persons = this.state.persons.slice();
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {  //Output content conditionally and same for list using JS
      persons = (
      <div>
        {this.state.persons.map((person, index) => {  //Map operatot
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key = {person.id} 
          changed = {(event) => this.nameChangedHandler(event, person.id)} />
        })}       
      </div> 
      );
      
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   color: 'black'
      // };
    }

const classes = [];
if(this.state.persons.length <=2) {
  classes.push('red'); // classes =['red]
}

if (this.state.persons.length <=1) {
  classes.push('bold'); //classes = ['red','bold']
}


    return (
      //<StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className ={classes.join(' ')}>This is really working!!</p>
        <button className = "button" onClick={() => this.togglePersonsHandler()}>
          Toggle Persons
        </button>

        {persons}
      </div>
      //</StyleRoot>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
