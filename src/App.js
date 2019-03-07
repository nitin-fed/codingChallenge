import React, { Component } from "react";
import PriceDetails from "./containers/PriceDetails";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";

import reducer from "./reducer/reducer";
import "./App.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, 
  composeEnhancer(applyMiddleware(thunk)))

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
      <Provider store={store}>
        <div className="App">
          <button onClick={() => this.handleShowPrice()}>Show/Hide Price</button>
          {showPrice}
        </div>
      </Provider>
    );
  }
}

export default App;
