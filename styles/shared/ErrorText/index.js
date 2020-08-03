import styled from "styled-components";

export default styled.span`
  display: inline-block;
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.2rem")};
  margin: ${({ margin }) => margin};
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: ${({ theme }) => theme.red};
`;
