import styled, { css } from "styled-components";

export const ProfileEditNavOuterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  overflow: hidden;
`;

export const ProfileEditNavInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  height: 100%;
  a {
    color: ${({ theme }) => theme.darkgrey};
    font-weight: 600;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.primary};
      a {
        color: ${({ theme }) => theme.primary};
      }
    `}
`;
