import styled from "styled-components";

export const SearchbarContainer = styled.div`
  width: 60%;
  margin-right: 40px;
  @media only screen and (max-width: 1050px) {
    max-width: 500px;
    margin-left: 20px;
    width: 80%;
  }
  @media only screen and (max-width: 800px) {
    flex: 1;
    margin-right: 0;
  }
  form {
    position: relative;
  }
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.lightgrey};
  padding: 15px 20px;
  width: 100%;
  @media only screen and (max-width: 360px) {
    padding: 10px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  outline: none;
  border: none;
  background-color: transparent;
  height: 25px;
  width: 25px;
  top: 50%;
  right: 20px;
  transform: translateY(-45%);
  cursor: pointer;
  svg {
    backface-visibility: hidden;
    transition: all 0.4s;
    path {
      stroke: ${({ theme }) => theme.grey};
      transition: all 0.4s;
    }
  }
  &:hover {
    svg {
      transform: scale(1.1);
      path {
        stroke: ${({ theme }) => theme.primary};
      }
    }
  }
`;
