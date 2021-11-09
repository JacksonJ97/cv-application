import React, { Component } from "react";

// Style
import { Wrapper } from "./Preview.style";

// Component
import BasicInfoView from "./BasicInfoView";
import SummaryView from "./SummaryView";

class Preview extends Component {
  render() {
    return (
      <Wrapper>
        <BasicInfoView info={this.props.basicInfo} />
        <SummaryView info={this.props.summaryInfo} />
      </Wrapper>
    );
  }
}

export default Preview;
