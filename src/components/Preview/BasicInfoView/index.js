import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .name {
    display: flex;
    align-items: flex-end;
    font-size: 2rem;
  }

  .basic-info {
    display: block;
    font-size: 0.75rem;
  }

  .basic-info div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.25em;
  }
`;

const BasicInfoView = (props) => {
  return (
    <Wrapper>
      <div className="name">
        {props.info.firstName} {props.info.lastName}
      </div>

      <div className="basic-info">
        <div>{props.info.address}</div>
        <div>{props.info.phoneNumber}</div>
        <div>{props.info.email}</div>
      </div>
    </Wrapper>
  );
};

export default BasicInfoView;
