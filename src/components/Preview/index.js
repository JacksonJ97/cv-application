import React, { Component } from "react";

// Style
import { Wrapper } from "./Preview.style";

// Component
import BasicInfoView from "./BasicInfoView";

class Preview extends Component {
  render() {
    return (
      <Wrapper>
        <BasicInfoView info={this.props.info} />
      </Wrapper>
    );
  }
}

export default Preview;
