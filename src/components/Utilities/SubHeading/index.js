import styled from "styled-components";

// Styles
const SubHeader = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25em;
`;

const SubHeading = (props) => {
  return <SubHeader>{props.subtitle}</SubHeader>;
};

export default SubHeading;
