import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currency: "Euro",
    };
  }
  
  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const rupees = this.state.amount;
    const euroValue = rupees * 80;
    alert(Converting to ${this.state.currency} Amount is ${euroValue});
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "green", textAlign: "left"  }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
          </div>
          <br />
          <div>
            <label>Currency:</label>
            <input
              type="text"
              value={this.state.currency}
              onChange={this.handleCurrencyChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
