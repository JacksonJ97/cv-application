// Components
import Heading from "../../Utilities/Heading";
import Education from "./Education";

const EducationView = (props) => {
  const education = props.info;

  return (
    <div>
      <Heading title="Education" />
      {education.map((element, index) => {
        return (
          <Education
            school={element.school}
            degree={element.degree}
            location={element.location}
            startDate={element.startDate}
            endDate={element.endDate}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default EducationView;
