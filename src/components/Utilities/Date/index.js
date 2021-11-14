import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1em;
`;

class Date extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.startDate} - {this.props.endDate}
      </Wrapper>
    );
  }
}

export default Date;
