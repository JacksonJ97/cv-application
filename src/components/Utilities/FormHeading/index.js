import React, { Component } from "react";

// Styles
import { Wrapper } from "./FormHeading.style";

class FormHeading extends Component {
  render() {
    return <Wrapper>{this.props.title}</Wrapper>;
  }
}

export default FormHeading;
