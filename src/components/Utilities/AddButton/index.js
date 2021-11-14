import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Button = styled.button`
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
`;

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
