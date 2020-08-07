import styled from "styled-components";

export const SearchbarContainer = styled.div`
  width: 500px;
  form {
    position: relative;
    input {
      outline: none;
      border: none;
      border-radius: 50px;
      background-color: ${({ theme }) => theme.lightgrey};
      padding: 15px 20px;
      width: 100%;
    }
    button {
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
    }
  }
`;
