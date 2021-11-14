import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Header = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.75em;
`;

class FormHeading extends Component {
  render() {
    return <Header>{this.props.title}</Header>;
  }
}

export default FormHeading;
