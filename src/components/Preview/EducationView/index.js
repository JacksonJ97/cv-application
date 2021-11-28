// Components
import Heading from "../../Utilities/Heading";
import Education from "./Education";

const EducationView = (props) => {
  return (
    <div>
      <Heading title="Education" />
      {props.educationInfo.map((element) => {
        return (
          <Education
            school={element.school}
            degree={element.degree}
            location={element.location}
            startDate={element.startDate}
            endDate={element.endDate}
            key={element.id}
          />
        );
      })}
    </div>
  );
};

export default EducationView;
