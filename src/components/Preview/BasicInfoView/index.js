import React, { Component } from "react";

// Styles
import { Wrapper } from "./BasicInfoView.style";

class BasicInfoView extends Component {
  render() {
    return (
      <Wrapper>
        <div className="name">{this.props.info.name}</div>

        <div className="basic-info">
          <div>{this.props.info.address}</div>
          <div>{this.props.info.phone}</div>
          <div>{this.props.info.email}</div>
        </div>
      </Wrapper>
    );
  }
}

export default BasicInfoView;
