import React, { Component } from "react";

import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "meetha"
  };

  nameChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.nameChangeHandler}
          presentname={this.state.username}
        />
        <UserOutput UserName={this.state.username} />
        <UserOutput UserName={this.state.username} />
        <UserOutput UserName={this.state.username} />
      </div>
    );
  }
}

export default App;
