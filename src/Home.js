import React, { Component } from "react";
import "./Home.css";
import { FeaturedItem } from "./FeaturedItem.js";
import { SingleProductDetailView } from "./SingleProductDetailView.js";

export class Home extends Component {
  state = { product: {} };

  // componentDidMount() {
  //   fetch(``)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ product: data });
  //     })
  //     .catch(error => console.error(error));
  // }

  render() {
    return (
      <div className="home-page">
        <div className="home-page-wrapper">
          <FeaturedItem />
          <SingleProductDetailView />
        </div>
      </div>
    );
  }
}
