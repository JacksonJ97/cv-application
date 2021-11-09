import React, { Component } from "react";

// Styles
import { Title } from "./Heading.style";

class Heading extends Component {
  render() {
    return <Title>{this.props.title}</Title>;
  }
}

export default Heading;
