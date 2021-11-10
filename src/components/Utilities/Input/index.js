import React, { Component } from "react";

class Input extends Component {
  render() {
    return <input type="text" placeholder={this.props.placeholder} />;
  }
}

export default Input;
