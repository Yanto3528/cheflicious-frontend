import styled from "styled-components";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";

export const RecipeDetailContainer = styled.section`
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  ${BadgeGroup} {
    padding: 10px 20px;
    ${Badge} {
      margin-bottom: 0;
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
    span {
      cursor: pointer;
      position: relative;
      svg {
        path: {
          fill: ${({ theme }) => theme.darkgrey};
        }
      }
    }
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
`;
