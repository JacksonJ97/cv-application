import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .name {
    font-size: 2rem;
  }

  .basic-info {
    display: block;
    font-size: 0.75rem;
  }

  .basic-info div {
    display: flex;
    justify-content: flex-end;
  }
`;
