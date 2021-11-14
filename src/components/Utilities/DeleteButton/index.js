import React, { Component } from "react";

// Styles
import { Button } from "./DeleteButton.style";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return <Button onClick={this.handleClick}>Delete</Button>;
  }
}

export default DeleteButton;
