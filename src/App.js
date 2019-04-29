import React, { Component } from "react";
import { Header } from "./Header.js";
import "./App.css";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
import { SingleProductDetailView } from "./SingleProductDetailView";
import { Cart } from "./Cart.js";
import { AllProductsContainer } from "./AllProductsContainer.js";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route
              path="/singleProductDetails/:id"
              component={SingleProductDetailView}
            />
            <Route path="/products" component={AllProductsContainer} />
            <Route path="/cart" component={Cart} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
