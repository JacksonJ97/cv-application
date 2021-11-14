import React, { Component } from "react";

// Components
import Heading from "../../Utilities/Heading";
import Experience from "./Experience";

class ExperienceView extends Component {
  render() {
    return (
      <div>
        <Heading title="Work Experience" />
        <Experience
          company={this.props.info.company}
          startDate={this.props.info.startDate}
          endDate={this.props.info.endDate}
          details={this.props.info.details}
        />

        {/* <Experience
          company={this.props.info.company}
          startDate={this.props.info.startDate}
          endDate={this.props.info.endDate}
          details={this.props.info.details}
        /> */}
      </div>
    );
  }
}

export default ExperienceView;
