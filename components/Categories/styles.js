import styled from "styled-components";

export const Category = styled.div`
  cursor: pointer;
  transition: all 0.4s;
  img {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;
