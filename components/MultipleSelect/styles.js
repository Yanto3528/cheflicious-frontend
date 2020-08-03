import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Placeholder = styled(motion.p)`
  font-size: 1.4rem;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const MultipleSelectContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const MultipleSelectInput = styled.div`
  outline: none;
  background-color: white;
  min-height: 47px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  font-size: 1.2rem;
  position: relative;
  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.red};
    `}
`;

export const MultipleSelectItem = styled(motion.span)`
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  overflow: hidden;
  display: inline-block;
  margin-right: 10px;
  div {
    display: flex;
    align-items: center;
  }
  p {
    padding: 2px 0 2px 10px;
    text-transform: capitalize;
  }
`;

export const MultipleSelectItemCloseIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  margin-left: 5px;
  transition: all 0.2s;
  svg {
    width: 15px;
    height: 15px;
    path {
      stroke: ${({ theme }) => theme.primary};
      transition: all 0.2s;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    svg {
      path {
        stroke: white;
      }
    }
  }
`;

export const IconContainer = styled.span`
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    path {
      stroke: ${({ theme }) => theme.grey};
    }
  }
`;

export const Dropdown = styled(motion.div)`
  width: 100%;
  max-height: 220px;
  position: absolute;
  bottom: -10px;
  left: 0;
  z-index: 10;
  transform: translateY(100%);
  background-color: white;
  border: 1px solid ${({ theme }) => theme.lightgrey2};
  border-radius: 5px;
  overflow-y: scroll;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightgrey2};
  }
`;
