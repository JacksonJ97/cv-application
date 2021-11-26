import styled from "styled-components";

// Styles
const Header = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0.75em 0;
`;

const FormHeading = (props) => {
  return <Header>{props.title}</Header>;
};

export default FormHeading;
