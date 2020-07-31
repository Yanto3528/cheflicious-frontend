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
    span {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-35%);
      cursor: pointer;
      svg {
        fill: ${({ theme }) => theme.grey};
        transition: all 0.4s;
        backface-visibility: hidden;
      }
      &:hover {
        svg {
          fill: ${({ theme }) => theme.primary};
          transform: scale(1.1);
        }
      }
    }
  }
`;
