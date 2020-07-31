import styled from "styled-components";

export const RecipeDetailContainer = styled.section`
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  margin-bottom: 150px;
`;

export const RecipeDetailHeader = styled.div`
  margin-bottom: 30px;
  padding: 0 20px;
  h1 {
    font-size: 3rem;
  }
  a {
    color: ${({ theme }) => theme.primary};
  }
`;
