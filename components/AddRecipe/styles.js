import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const AddRecipeContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const AddRecipeFormGroupContainer = styled.div`
  > div:not(:last-child) {
    margin-bottom: 10px;
  }
  h3 {
    border-bottom: 1px solid ${({ theme }) => theme.grey2};
    padding-bottom: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: 600;
  }
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};
    svg {
      width: 25px;
      height: 25px;
      path {
        stroke: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  font-size: 1.4rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;
