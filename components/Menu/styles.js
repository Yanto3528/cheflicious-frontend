import styled from "styled-components";

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavMenuItem = styled.li`
  margin-left: 40px;
  padding: 20px 0;
  position: relative;
  img {
    cursor: pointer;
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
