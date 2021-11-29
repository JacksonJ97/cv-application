import styled from "styled-components";

// Components
import BasicInfoView from "./BasicInfoView";
import SummaryView from "./SummaryView";
import ExperienceView from "./ExperienceView";
import EducationView from "./EducationView";

// Styles
const Wrapper = styled.div`
  border-radius: 6px;
  border: 1px solid black;
  margin: 2em;
  padding: 2em;
  width: 70%;
  background-color: #ffffff;

  @media (min-width: 1300px) {
    position: sticky;
    top: 3%;
    left: 50%;
    align-self: flex-start;
    width: 45%;
  }
`;

const Preview = (props) => {
  return (
    <Wrapper>
      <BasicInfoView basicInfo={props.basicInfo} />
      <SummaryView summaryInfo={props.summaryInfo} />
      <ExperienceView experienceInfo={props.experienceInfo} />
      <EducationView educationInfo={props.educationInfo} />
    </Wrapper>
  );
};

export default Preview;
