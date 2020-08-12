import styled from "styled-components";

export default styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  @media only screen and (max-width: 360px) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
