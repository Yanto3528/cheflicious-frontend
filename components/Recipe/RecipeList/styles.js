import styled from "styled-components";
import LoadingIcon from "../../../styles/shared/LoadingIcon";

export const RecipeListContainer = styled.section`
  h1 {
    text-transform: capitalize;
  }
  > h2 {
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
    span {
      text-transform: capitalize;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    ${LoadingIcon} {
    }
    h3 {
      font-weight: 600;
    }
  }
`;
