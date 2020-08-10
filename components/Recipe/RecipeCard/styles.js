import styled, { css } from "styled-components";
import { BadgeGroup } from "../../../styles/shared/Badge";
import { motion } from "framer-motion";

export const RecipeCardDetail = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RecipeCardImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const RecipeCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow};
  h2 {
    padding: 20px 20px 10px 20px;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
  ${BadgeGroup} {
    flex: 1;
  }
  ${RecipeCardDetail} {
    padding: ${({ small }) => (small ? "20px" : "0")};
  }
  ${RecipeCardImageContainer} {
    height: ${({ small }) => (small ? "200px" : "300px")};
  }
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
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;
