import styled from "styled-components";

export default styled.button`
  outline: none;
  border: none;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.4rem")};
  border-radius: ${({ pill }) => (pill ? "100px" : "5px")};
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: ${({ padding }) => (padding ? padding : "10px")};
  width: 100%;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
