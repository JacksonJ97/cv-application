import styled from "styled-components";

// Styles
const Header = styled.h2`
  margin: 0.5em 0;
  padding-bottom: 0.25em;
  border-bottom: 1px solid black;
  font-weight: 400;
`;

const Heading = (props) => {
  return <Header>{props.title}</Header>;
};

export default Heading;
