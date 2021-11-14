import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .name {
    display: flex;
    align-items: flex-end;
    font-size: 2rem;
  }

  .basic-info {
    display: block;
    font-size: 0.75rem;
  }

  .basic-info div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.25em;
  }
`;

class BasicInfoView extends Component {
  render() {
    return (
      <Wrapper>
        <div className="name">
          {this.props.info.firstName} {this.props.info.lastName}
        </div>

        <div className="basic-info">
          <div>{this.props.info.address}</div>
          <div>{this.props.info.phoneNumber}</div>
          <div>{this.props.info.email}</div>
        </div>
      </Wrapper>
    );
  }
}

export default BasicInfoView;
