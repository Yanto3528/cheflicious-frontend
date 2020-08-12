import styled from "styled-components";

export const SingleRecipeContainer = styled.main`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-gap: 72px;
  padding-bottom: 150px;
  @media only screen and (max-width: 1180px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;
