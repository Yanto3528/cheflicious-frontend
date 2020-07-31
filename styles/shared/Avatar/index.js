import styled from "styled-components";

export default styled.img`
  width: ${({ size }) => (size ? size : "50px")};
  height: ${({ size }) => (size ? size : "50px")};
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "10px")};
`;
