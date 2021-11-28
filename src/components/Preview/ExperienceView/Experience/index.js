import styled from "styled-components";

// Components
import SubHeading from "../../../Utilities/SubHeading";
import Date from "../../../Utilities/Date";

// Styles
const Wrapper = styled.div`
  margin-bottom: 1em;

  ul {
    font-size: 0.875rem;
    margin-left: 2em;
  }
`;

const Experience = (props) => {
  return (
    <Wrapper>
      <SubHeading subtitle={props.company} />
      <Date startDate={props.startDate} endDate={props.endDate} />

      <ul>
        {props.details.map((detail) => {
          return <li key={detail.id}>{detail.text}</li>;
        })}
      </ul>
    </Wrapper>
  );
};

export default Experience;
