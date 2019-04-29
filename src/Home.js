import React, { Component } from "react";
import "./Home.css";

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
        This is the Home Page
        <div className="home-page-wrapper">Product Card Wrapper</div>
        <div className="each-product-card">Each Product Card</div>
      </div>
    );
  }
}
