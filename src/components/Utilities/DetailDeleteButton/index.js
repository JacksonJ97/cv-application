import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Button = styled.button`
  padding: 0.75em;
  background-color: #082032;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #2c394b;
  }
`;

class DetailDeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteDetail = this.handleDeleteDetail.bind(this);
  }

  handleDeleteDetail() {
    this.props.handleDeleteDetail(this.props.id, this.props.detailId);
  }

  render() {
    return <Button onClick={this.handleDeleteDetail}>Delete</Button>;
  }
}
export default DetailDeleteButton;
