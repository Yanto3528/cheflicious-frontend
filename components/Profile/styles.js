import styled from "styled-components";

export const ProfileContainer = styled.div``;
export const ProfileDetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 50px;
`;

export const ProfileDetail = styled.div`
  p {
    margin-bottom: 10px;
  }
  div {
    span {
      margin-right: 20px;
    }
  }
  button {
    outline: none;
    border: 1px solid ${({ theme }) => theme.red};
    border-radius: 3px;
    color: ${({ theme }) => theme.red};
    padding: 8px 24px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.red};
      color: white;
    }
  }
`;

export const ProfileRecipesHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileRecipesNav = styled.h2`
  color: ${({ active, theme }) => (active ? theme.darkgrey : theme.grey)};
  margin-right: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s;
  svg {
    margin-right: 5px;
    path {
      stroke: ${({ active, theme }) => (active ? theme.darkgrey : theme.grey)};
      stroke-width: 1.5;
    }
  }
`;
