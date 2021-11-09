import React, { Component } from "react";

// Styles
import { Wrapper } from "./Date.style";

class Date extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.startDate} - {this.props.endDate}
      </Wrapper>
    );
  }
}

export default Date;
