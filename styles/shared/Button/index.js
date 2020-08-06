import styled from "styled-components";

export default styled.button`
  outline: none;
  border: none;
  font-size: 1.4rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;
