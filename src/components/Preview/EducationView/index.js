import React, { Component } from "react";

// Components
import Heading from "../../Utilities/Heading";
import Education from "./Education";

class EducationView extends Component {
  render() {
    return (
      <div>
        <Heading title="Education" />
        <Education
          school={this.props.info.school}
          degree={this.props.info.degree}
          location={this.props.info.location}
          startDate={this.props.info.startDate}
          endDate={this.props.info.endDate}
        />
      </div>
    );
  }
}

export default EducationView;
