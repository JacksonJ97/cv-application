import React, { Component } from "react";

// Components
import Heading from "../../Utilities/Heading";
import Experience from "./Experience";

class ExperienceView extends Component {
  render() {
    return (
      <div>
        <Heading title="Work Experience" />
        {this.props.info.map((element) => {
          return (
            <Experience
              company={element.company}
              startDate={element.startDate}
              endDate={element.endDate}
              details={element.details}
              key={element.id}
            />
          );
        })}
      </div>
    );
  }
}

export default ExperienceView;
