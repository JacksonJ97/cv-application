import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;

  .name {
    font-size: 2rem;
  }

  .basic-info {
    display: block;
    font-size: 0.625rem;
  }

  .basic-info div {
    display: flex;
    justify-content: flex-end;
  }
`;
