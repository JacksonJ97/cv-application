import React, { Component } from "react";
import styled from "styled-components";

// Styles
const SubHeader = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25em;
`;

class SubHeading extends Component {
  render() {
    return <SubHeader>{this.props.subtitle}</SubHeader>;
  }
}

export default SubHeading;
