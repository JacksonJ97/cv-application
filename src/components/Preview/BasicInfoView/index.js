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
        {props.basicInfo.firstName} {props.basicInfo.lastName}
      </div>

      <div className="basic-info">
        <div>{props.basicInfo.address}</div>
        <div>{props.basicInfo.phoneNumber}</div>
        <div>{props.basicInfo.email}</div>
      </div>
    </Wrapper>
  );
};

export default BasicInfoView;
