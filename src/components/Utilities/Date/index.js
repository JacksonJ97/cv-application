import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1em;
`;

const Date = (props) => {
  return (
    <Wrapper>
      {props.startDate} - {props.endDate}
    </Wrapper>
  );
};

export default Date;
