import styled from "styled-components";

export const RelatedRecipeContainer = styled.aside`
  > h2 {
    margin-top: -10px;
    margin-bottom: 20px;
  }
  > div {
    > div {
      margin-bottom: 24px;
    }
  }
  @media only screen and (max-width: 1180px) {
    > div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 24px;
      align-items: flex-start;
    }
  }
  @media only screen and (max-width: 500px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;
