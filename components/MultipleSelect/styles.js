import styled from "styled-components";
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
  height: 40px;
  cursor: pointer;
`;

export const MultipleSelectInput = styled.div`
  background-color: white;
  height: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  font-size: 1.4rem;
  position: relative;
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
    padding: 5px 0 5px 10px;
  }
`;

export const MultipleSelectItemCloseIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin-left: 5px;
  transition: all 0.2s;
  svg {
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
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
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
