import React, { Component } from "react";
import { Header } from "./Header.js";
import "./App.css";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
import { AllProducts } from "./AllProducts.js";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={AllProducts} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
