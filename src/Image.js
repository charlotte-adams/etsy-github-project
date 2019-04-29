import React, { Component } from "react";

export class Image extends Component {
  state = { image: "" };

  componentDidMount() {
    fetch("http://localhost:8000/listings/638754067/images")
      .then(response => response.json())
      .then(data => {
        this.setState({ image: data.results[0].url_570xN });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { image } = this.state;

    if (image === "") {
      return null;
    }
    return (
      <img
        className="fit-picture"
        src="https://i.etsystatic.com/7803582/r/il/60d3bb/1661371467/il_570xN.1661371467_38ng.jpg"
        alt="Light lavendar mid-calf lined robe"
      />
    );
  }
}
