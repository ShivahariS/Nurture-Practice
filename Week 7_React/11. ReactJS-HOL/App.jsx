import React, { Component } from "react";
import CurrencyConvertor from "./Components/CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayHello = () => {
    alert("Hello! Counter Incremented.");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked!");
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h3>{this.state.counter}</h3>
        <button onClick={this.increment}>Increment</button>
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={() => this.sayWelcome("Welcome to Event Handling!")}>
          Say welcome
        </button>
        <br />
        <button onClick={this.handleSyntheticEvent}>Click on me</button>
        <br />
        <br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
