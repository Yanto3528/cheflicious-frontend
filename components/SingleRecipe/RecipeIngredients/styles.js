import styled from "styled-components";

export const RecipeIngredientsContainer = styled.div`
  margin-bottom: 20px;
`;

export const RecipeIngredientsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightgrey2};
  h2 {
    font-weight: 600;
  }
  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const RecipeIngredientList = styled.ul`
  padding: 0 20px;
  list-style: disc inside;
  li {
    margin-bottom: 5px;
  }
`;
