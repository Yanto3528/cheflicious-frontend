import styled from "styled-components";
import { motion } from "framer-motion";

export const Placeholder = styled.p`
  font-size: 1.4rem;
`;

export const MultipleSelectContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const MultipleSelectInput = styled.div`
  background-color: white;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  font-size: 1.4rem;
  position: relative;
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
  height: 220px;
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
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightgrey2};
  }
`;
