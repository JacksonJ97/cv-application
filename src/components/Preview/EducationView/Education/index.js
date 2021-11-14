import React, { Component } from "react";
import styled from "styled-components";

// Components
import Date from "../../../Utilities/Date";

// Styles
const Wrapper = styled.div`
  margin-bottom: 1em;

  h3 {
    font-size: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25em;
  }

  p {
    font-size: 0.875rem;
  }

  .bold {
    font-weight: 700;
    font-size: 1rem;
  }
`;

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
