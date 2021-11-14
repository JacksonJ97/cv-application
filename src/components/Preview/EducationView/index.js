import React, { Component } from "react";

// Components
import Heading from "../../Utilities/Heading";
import Education from "./Education";

class EducationView extends Component {
  render() {
    const education = this.props.info;

    return (
      <div>
        <Heading title="Education" />
        {education.map((item, index) => {
          return (
            <Education
              school={item.school}
              degree={item.degree}
              location={item.location}
              startDate={item.startDate}
              endDate={item.endDate}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default EducationView;
