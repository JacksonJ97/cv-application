import styled from "styled-components";

// Components
import Heading from "../../Utilities/Heading";

// Styles
const Wrapper = styled.div`
  p {
    font-size: 0.875rem;
  }
`;

const SummaryView = (props) => {
  return (
    <Wrapper>
      <Heading title="Summary" />
      <p>{props.summaryInfo}</p>
    </Wrapper>
  );
};

export default SummaryView;
