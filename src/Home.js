import React, { Component } from "react";
import "./Home.css";
import { FeaturedItem } from "./FeaturedItem.js";
import { SingleProduct } from "./SingleProduct.js";

export class Home extends Component {
  state = { post: {} };

  // componentDidMount() {
  //   fetch(``)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ post: data });
  //     })
  //     .catch(error => console.error(error));
  // }

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
