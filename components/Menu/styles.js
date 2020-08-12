import styled from "styled-components";

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
  @media only screen and (max-width: 500px) {
    /* justify-content: space-between; */
  }
  > *:not(:first-child) {
    margin-left: 40px;
  }
`;

export const NavMenuItem = styled.li`
  /* margin-left: 40px; */
  padding: 20px 0;
  position: relative;
  img {
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    padding: 10px 0;
  }
  @media only screen and (max-width: 500px) {
    flex: 1;
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
`;
