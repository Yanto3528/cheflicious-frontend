import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  margin-bottom: 50px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavMenuItem = styled.li`
  padding: 20px;
  a {
    color: ${({ theme }) => theme.darkgrey};
    font-weight: 500;
  }
  .btn-signup {
    display: inline-block;
    padding: 8px 24px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50px;
    color: white;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.8;
    }
  }
`;
