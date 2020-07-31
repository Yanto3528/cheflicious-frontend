import styled from "styled-components";

export const RecipeCardContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  h2 {
    padding: 20px 20px 10px 20px;
    font-weight: 600;
  }
`;
export const RecipeCardDetail = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RecipeCategories = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;
export const RecipeCardSocial = styled.div`
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.lightgrey2};
  display: flex;
  align-items: center;
  span {
    margin-right: 20px;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;
