import React, { Component } from "react";
import "./Home.css";
import { FeaturedItem } from "./FeaturedItem.js";
import { SingleProduct } from "./SingleProduct.js";

export class Home extends Component {
  render() {
    return (
      <div className="home-page-wrapper">
        <div className="home-page-featured-each-container">
          <FeaturedItem />
          <SingleProduct />
        </div>
      </div>
    );
  }
}
