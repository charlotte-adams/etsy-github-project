import React, { Component } from "react";

export class Image extends Component {
  state = { image: "" };

  componentDidMount() {
    const id = this.props.id;

    fetch(`http://localhost:8000/listings/${id}/images`)
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
        src={image}
        alt="Light lavendar mid-calf lined robe"
      />
    );
  }
}
