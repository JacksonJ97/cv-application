import React, { Component } from "react";

// Styles
import { Wrapper } from "./SummaryView.style";

// Components
import Heading from "../../Utilities/Heading";

class SummaryView extends Component {
  render() {
    return (
      <Wrapper>
        <Heading title="Summary" />
        <div>{this.props.info.text}</div>
      </Wrapper>
    );
  }
}

export default SummaryView;
