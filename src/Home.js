import React, { Component } from "react";
import "./Home.css";
import { FeaturedItem } from "./FeaturedItem.js";
import { SingleProduct } from "./SingleProduct.js";

export class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page-wrapper">
          <FeaturedItem />
          <SingleProduct />
        </div>
      </div>
    );
  }
}
