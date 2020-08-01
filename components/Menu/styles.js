import styled from "styled-components";

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavMenuItem = styled.li`
  margin-left: 40px;
  padding: 20px 0;
  cursor: pointer;
  position: relative;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.darkgrey};
  font-weight: 500;
`;

export const SignupButton = styled.a`
  display: inline-block;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50px;
  color: white;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;

export const MenuIcon = styled.span`
  svg {
    width: 25px;
    height: 25px;
  }
`;
