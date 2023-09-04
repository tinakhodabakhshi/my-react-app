import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

export default ImageComponent;
