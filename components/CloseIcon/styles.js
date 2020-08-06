import styled, { css } from "styled-components";

export default styled.span`
  width: ${({ size }) => (size ? size : "20px")};
  height: ${({ size }) => (size ? size : "20px")};
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    path {
      stroke: ${({ color, theme }) => (color ? color : theme.grey)};
    }
  }
  ${({ top }) =>
    top &&
    css`
      top: ${({ wide }) => (wide ? "30px" : "20px")};
      right: ${({ wide }) => (wide ? "30px" : "20px")};
      transform: translateY(0);
    `}
`;
