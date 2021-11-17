import React, { Component } from "react";
import styled from "styled-components";

// Components
import SubHeading from "../../../Utilities/SubHeading";
import Date from "../../../Utilities/Date";

// Styles
const Wrapper = styled.div`
  margin-bottom: 1em;

  ul {
    font-size: 0.875rem;
    margin-left: 2em;
  }
`;

class Experience extends Component {
  render() {
    const details = this.props.details;

    return (
      <Wrapper>
        <SubHeading subtitle={this.props.company} />
        <Date startDate={this.props.startDate} endDate={this.props.endDate} />

        <ul>
          {details.map((detail) => {
            return <li key={detail.id}>{detail.text}</li>;
          })}
        </ul>
      </Wrapper>
    );
  }
}

export default Experience;
