import React, { Component } from "react";
import { AllProducts } from "./AllProducts";

export class AllProductsContainer extends Component {
  render() {
    return (
      <div className="all-products-wrapper">
        This is the All Products Container
        <AllProducts />
      </div>
    );
  }
}
