import styled from "styled-components";

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
    > span {
      margin-left: 20px;
    }
  }
  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 1.8rem;
    }
    > div {
      > span {
        margin-left: 10px;
      }
      > span:not(:last-child) {
        margin-left: 0;
      }
    }
  }
`;

export const RecipeInstructionsStepContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 50px;
`;

export const RecipeInstructionsStep = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  span {
    font-weight: 900;
    font-size: 1.7rem;
    color: ${({ theme }) => theme.darkgrey};
    margin-right: 10px;
    width: 18px;
    display: inline-block;
  }
  p {
    flex: 1;
  }
`;
