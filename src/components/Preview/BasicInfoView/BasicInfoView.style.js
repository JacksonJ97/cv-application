import styled from "styled-components";

export const Wrapper = styled.div`
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
