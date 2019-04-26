import React, { Component } from "react";

export class Image extends Component {
  state = { image: "" };

  componentDidMount() {
    fetch("http://localhost:8000/listings/638754067/images")
      .then(response => response.json())
      .then(data => {
        this.setState({ image: data.results[0].url_170x135 });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { image } = this.state;
    console.log(image);

    if (image === "") {
      return null;
    }
    console.log(image);
    return (
      <img
        className="fit-picture"
        src="https://i.etsystatic.com/7803582/d/il/60d3bb/1661371467/il_170x135.1661371467_38ng.jpg?version=0"
        alt="Light lavendar mid-calf lined robe"
      />
    );
  }
}
