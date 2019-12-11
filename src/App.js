 import React, { Component } from 'react';
 import './App.css';
 import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:"Max", age:20 },
      {name:"Mark", age:30 },
      {name:"Mathew", age:40 }
    ]
  }

  switchNameHandler = (newName) =>{
  this.setState({
    persons:[
      {name:newName, age:20 },
      {name:"Mark", age:30 },
      {name:"Mathew", age:40 }
    ]
  })
  }

  nameChangedHandler =(event) =>{
    this.setState({
      persons:[
        {name:"Max", age:20 },
        {name:event.target.value, age:30 },
        {name:"Mathew", age:40 }
      ]
    })
  }
  render() {
    const style={
      backgroundColor: 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>this is really working..</p>
        <button 
        style ={style}
        onClick={this.switchNameHandler.bind(this,'maximillian')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}/>
         <Person
          name={this.state.persons[1].name}
           age={this.state.persons[1].age}
           click={this.switchNameHandler.bind(this,'Max!')}
           changed={this.nameChangedHandler}> MY HOBBIES:cooking</Person>
         <Person 
         name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;








