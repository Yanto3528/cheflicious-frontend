import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  min-height: 80px;
  margin-bottom: 50px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  > div:first-child {
    height: 100%;
  }
  @media only screen and (max-width: 800px) {
    padding-top: 20px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    width: 100px;
  }
  @media only screen and (max-width: 500px) {
    width: 90px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    > div:first-child {
      width: 100%;
      justify-content: flex-start;
    }
  }
`;

export const HamburgerMenuContainer = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;
export const HamburgerMenu = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.grey2};
  position: relative;
  transition: all 0.4s;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.grey2};
    transition: all 0.4s;
  }
  &:before {
    top: -8px;
  }
  &:after {
    top: 8px;
  }
  ${({ active }) =>
    active &&
    css`
      transform: rotate(135deg);
      &:before,
      &:after {
        top: 0;
        transform: rotate(90deg);
      }
    `}
`;
