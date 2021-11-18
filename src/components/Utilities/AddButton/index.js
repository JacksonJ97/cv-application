import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Button = styled.button`
  width: 100%;
  padding: 0.75em 0.5em;
  margin: 0.5em 0;
  background-color: #ff4c29;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #ff5f40;
  }
`;

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e.target.name);
  }

  render() {
    return (
      <Button onClick={this.handleClick} name={this.props.name}>
        Add
      </Button>
    );
  }
}

export default AddButton;
