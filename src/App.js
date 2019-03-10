import React, { Component } from "react";
import PriceDetails from "./containers/PriceDetails";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPrice: true
    };
  }
  handleShowPrice() {
    this.setState({ showPrice: !this.state.showPrice });
  }

  render() {
    let showPrice = null;
    if (this.state.showPrice) {
      showPrice = <PriceDetails />;
    }

    return (
      <div className="App">
        <button onClick={() => this.handleShowPrice()}>Show/Hide Price</button>
        {showPrice}
      </div>
    );
  }
}

export default App;
