import styled, { css } from "styled-components";

const baseMenuStyles = css`
  display: flex;
  align-items: center;
  > *:not(:first-child) {
    margin-left: 40px;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
  @media only screen and (max-width: 500px) {
    position: relative;
  }
`;

export const NavMenu = styled.ul`
  ${baseMenuStyles}
`;

export const AuthNavMenu = styled.ul`
  ${baseMenuStyles}
  @media only screen and (max-width: 500px) {
    justify-content: space-between;
  }
`;

export const NavMenuItem = styled.li`
  padding: 20px 0;
  position: relative;
  img {
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    padding: 10px 0;
  }
  @media only screen and (max-width: 500px) {
    position: static;
  }
  @media only screen and (max-width: 320px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.darkgrey};
  font-weight: 500;
  cursor: pointer;
`;

export const SignupButton = styled.a`
  display: inline-block;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50px;
  color: white;
  cursor: pointer;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.8;
    color: white;
  }
`;

export const MenuIcon = styled.span`
  cursor: pointer;
  position: relative;
  svg {
    width: 25px;
    height: 25px;
  }
  @media only screen and (max-width: 500px) {
    position: static;
  }
  @media only screen and (max-width: 320px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
