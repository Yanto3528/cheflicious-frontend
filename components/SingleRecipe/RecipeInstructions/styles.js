import styled from "styled-components";

export const RecipeInstructionsContainer = styled.div``;

export const RecipeInstructionsHeader = styled.div`
  padding: 0 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-weight: 600;
  }
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 20px;
    }
  }
`;

export const RecipeInstructionsStep = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 20px;
  margin-bottom: 20px;
  span {
    font-weight: 900;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.darkgrey};
    margin-right: 10px;
  }
`;
