import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  margin-bottom: 50px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  > div:first-child {
    height: 100%;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
