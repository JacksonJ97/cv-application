import React, { Component } from "react";

// Styles
import { Wrapper } from "./Education.style";

// Components
import Date from "../../../Utilities/Date";

class Education extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h3>{this.props.school}</h3>
          <p className="bold">{this.props.location}</p>
        </div>

        <div>
          <p>{this.props.degree}</p>
          <Date startDate={this.props.startDate} endDate={this.props.endDate} />
        </div>
      </Wrapper>
    );
  }
}

export default Education;
