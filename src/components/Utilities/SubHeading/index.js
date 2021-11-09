import React, { Component } from "react";

// Styles
import { Subtitle } from "./SubHeading.style";

class SubHeading extends Component {
  render() {
    return <Subtitle>{this.props.subtitle}</Subtitle>;
  }
}

export default SubHeading;
