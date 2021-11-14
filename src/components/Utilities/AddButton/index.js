import React, { Component } from "react";

// Styles
import { Button } from "./AddButton.style";

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return <Button onClick={this.handleClick}>Add</Button>;
  }
}

export default AddButton;
