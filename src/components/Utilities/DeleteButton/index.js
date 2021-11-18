import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Button = styled.button`
  width: 100%;
  padding: 0.75em 0.5em;
  margin: 0.5em 0;
  background-color: #082032;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #2c394b;
  }
`;

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(this.props.id, e.target.name);
  }

  render() {
    return (
      <Button onClick={this.handleClick} name={this.props.name} id={this.props.id}>
        Delete
      </Button>
    );
  }
}

export default DeleteButton;
