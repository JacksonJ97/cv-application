import React, { Component } from "react";

// Styles
import { Wrapper } from "./Input.style";

class Input extends Component {
  render() {
    return <Wrapper type="text" placeholder={this.props.placeholder} />;
  }
}

export default Input;
