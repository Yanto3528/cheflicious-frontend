import styled from "styled-components";

export default styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "easy":
        return theme.success;
      case "medium":
        return theme.info;
      case "hard":
        return theme.danger;
      default:
        return theme.success;
    }
  }};
  @media only screen and (max-width: 360px) {
    width: 15px;
    height: 15px;
  }
`;
