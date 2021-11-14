import React, { Component } from "react";
import styled from "styled-components";

// Components
import Heading from "../../Utilities/Heading";

// Styles
const Wrapper = styled.div`
  p {
    font-size: 0.875rem;
  }
`;

class SummaryView extends Component {
  render() {
    return (
      <Wrapper>
        <Heading title="Summary" />
        <p>{this.props.info}</p>
      </Wrapper>
    );
  }
}

export default SummaryView;
