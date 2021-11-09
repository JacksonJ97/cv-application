import React, { Component } from "react";

// Styles
import { Wrapper } from "./Experience.style";

// Components
import SubHeading from "../../../Utilities/SubHeading";
import Date from "../../../Utilities/Date";

class Experience extends Component {
  render() {
    return (
      <Wrapper>
        <SubHeading subtitle={this.props.company} />
        <Date startDate={this.props.startDate} endDate={this.props.endDate} />

        <ul>
          {this.props.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default Experience;
