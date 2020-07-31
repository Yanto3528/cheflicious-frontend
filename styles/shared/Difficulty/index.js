import styled from "styled-components";

export default styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.success};
  border-radius: 50%;
  margin-right: 5px;
`;
