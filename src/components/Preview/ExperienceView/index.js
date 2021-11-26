// Components
import Heading from "../../Utilities/Heading";
import Experience from "./Experience";

const ExperienceView = (props) => {
  return (
    <div>
      <Heading title="Work Experience" />
      {props.info.map((element) => {
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
};

export default ExperienceView;
