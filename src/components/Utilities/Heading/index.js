import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Header = styled.h2`
  margin: 1em 0;
  padding-bottom: 0.25em;
  border-bottom: 1px solid black;
  font-weight: 400;
`;

class Heading extends Component {
  render() {
    return <Header>{this.props.title}</Header>;
  }
}

export default Heading;
