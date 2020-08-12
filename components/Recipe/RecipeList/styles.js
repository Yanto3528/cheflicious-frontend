import styled from "styled-components";

export const RecipeListContainer = styled.section`
  h1 {
    text-transform: capitalize;
  }
  > h3 {
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
    span {
      text-transform: capitalize;
    }
  }
  @media only screen and (max-width: 670px) {
    h1 {
      text-align: center;
    }
  }
`;
