import styled from "styled-components";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";

export const RecipeDetailContainer = styled.section`
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: calc(width / 1.33333);
    object-fit: cover;
  }
  ${BadgeGroup} {
    padding: 10px 20px;
    ${Badge} {
      margin-bottom: 10px;
    }
  }
`;

export const RecipeDetailHeader = styled.div`
  margin-bottom: 30px;
  padding: 0 20px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-size: 3rem;
  }
  a {
    color: ${({ theme }) => theme.primary};
  }
  p {
    margin-top: 10px;
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const EllipsisContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  svg {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    path: {
      fill: ${({ theme }) => theme.darkgrey};
    }
  }
  @media only screen and (max-width: 500px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
